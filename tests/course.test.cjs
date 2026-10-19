const {JSDOM}=require('jsdom');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
let checks=0;
function ok(v,msg){assert.ok(v,msg);checks++;}
function boot(saved,failStorage=false){const d=new JSDOM(fs.readFileSync(path.join(root,'index.html'),'utf8'),{url:'https://example.test/course/',runScripts:'outside-only'});const w=d.window;if(saved)w.localStorage.setItem('principal-fluency-v1',saved);if(failStorage)Object.defineProperty(w,'localStorage',{get(){throw Error('blocked')}});for(const f of ['content.js','registry.js','app.js'])w.eval(fs.readFileSync(path.join(root,f),'utf8'));return w;}
function route(w,r){w.location.hash=r;w.dispatchEvent(new w.HashChangeEvent('hashchange'));}
let w=boot();let d=w.document;
ok(w.LESSONS.length===12,'12 lessons');ok(w.LESSONS.flatMap(l=>l.drills).length===36,'36 followups');
ok(new Set(w.LESSONS.map(l=>l.id)).size===12,'unique lesson IDs');
for(const l of w.LESSONS){for(const f of ['goal','trade','case','task','hint','solution'])ok(l[f].length>20,`${l.id}: ${f} substantive`);ok(l.body.length>=3,'framework paragraphs');route(w,'lesson-'+l.id);ok(d.querySelector('h1').textContent===l.title,'route renders correct heading');ok(![...d.querySelectorAll('details')].some(x=>x.open),'solutions hidden by default');}
route(w,'lesson-7');const n=d.querySelector('#notes');n.value='Fictional <script>alert(1)</script> invariant';n.dispatchEvent(new w.Event('input'));
d.querySelectorAll('[data-dim]').forEach(e=>{e.value='3';e.dispatchEvent(new w.Event('change'));});ok(d.querySelector('#scoreTotal').textContent.includes('15 / 20'),'rubric calculates total');
d.querySelector('#complete').click();ok(d.querySelector('#progressLabel').textContent.includes('1 / 12'),'progress advances');route(w,'review');ok(d.querySelector('[data-review="7"]'),'review scheduled');d.querySelector('[data-review="7"]').click();const saved=w.localStorage.getItem('principal-fluency-v1');ok(JSON.parse(saved).reviews['7'].stage===1,'delayed review advances');
let w2=boot(saved);route(w2,'lesson-7');ok(w2.document.querySelector('#notes').value===n.value,'notes persist and remain plain text');ok(!w2.document.querySelector('#main script'),'stored text never executes');ok(w2.document.querySelector('#scoreTotal').textContent.includes('15 / 20'),'scores persist');
route(w,'glossary');d.querySelector('#termSearch').value='invariant';d.querySelector('#termSearch').dispatchEvent(new w.Event('input'));ok(d.querySelectorAll('#terms dt').length===1,'glossary filter');
d.querySelector('#search').value='outbox';d.querySelector('#search').dispatchEvent(new w.Event('input'));ok(d.querySelectorAll('#lessonNav a').length>0,'lesson content search');d.querySelector('#search').value='zzzzzz';d.querySelector('#search').dispatchEvent(new w.Event('input'));ok(d.querySelector('#lessonNav').textContent.includes('No matching'),'empty search result');
route(w,'courses');ok(d.querySelectorAll('#main a').length===w.COURSES.length,'only live registry links');for(const c of w.COURSES)ok(c.status==='live'&&c.url.startsWith('https://shreyaskc.github.io/'),'registry validated');
route(w,'review');w.confirm=()=>false;d.querySelector('#reset').click();ok(JSON.parse(w.localStorage.getItem('principal-fluency-v1')).done['7'],'cancel reset keeps progress');w.confirm=()=>true;d.querySelector('#reset').click();ok(Object.keys(JSON.parse(w.localStorage.getItem('principal-fluency-v1')).done).length===0,'confirmed reset clears course only');
for(const bad of ['not json','null','[]']){const x=boot(bad);ok(x.document.querySelector('h1'),'malformed storage recoverable');x.close();}const blocked=boot(null,true);route(blocked,'lesson-1');blocked.document.querySelector('#complete').click();ok(blocked.document.querySelector('#progressLabel').textContent.includes('1 / 12'),'storage denied session still usable');blocked.close();
// Validate lesson arithmetic independently from displayed prose.
ok((8000+100000000/1000*0.04)*36===432000,'buy baseline');ok(12*20000+36*(.5*20000+4000)===744000,'build baseline');ok(120000/60000000===96000/48000000,'cost per successful dispatch');
for(const f of ['index.html','style.css','app.js','content.js','registry.js'])ok(fs.statSync(path.join(root,f)).size>0,`${f} present`);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');ok(html.includes('lang="en"')&&html.includes('name="viewport"'),'language and responsive viewport');ok(html.includes('class="skip"')&&html.includes('role="status"'),'keyboard skip and status');
route(w,'not-a-route');ok(d.querySelector('h1').textContent.includes('hard decisions'),'unknown route safely falls back');
w.close();w2.close();console.log(`PASS: ${checks} assertions. DOM behavior, content contracts, persistence, privacy escaping, review queue, scoring, registry and exercise arithmetic.`);
