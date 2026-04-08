import{E as he,u as be,c as re,o as fe,a as ve,b as U,d as I,e as $,t as A,s as oe,i as s,B as le,m as ne,f as V,S as M,C as pe,L as Pe,F as ue,g as v}from"./index-rWPuIGyC.js";const xe=(l,u)=>{const t=new he({orientation:"portrait",unit:"mm",format:"letter"}),F=t.internal.pageSize.getWidth(),X=t.internal.pageSize.getHeight(),x=15,de=X-25,B=F-x*2,j=(B-10)/2,J=[25,118,210],K=[245,245,245],Q=[25,118,210],G=[244,67,54],N=[76,175,80],D=[33,33,33],k=[117,117,117],C=o=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(o||0),z=o=>(t.setFontSize(8),t.setTextColor(...k),t.text(`${u("balanceSheet.title","Balance General")} - ${l.reportDate}`,x,o),o+8),w=(o,m)=>o+m>de?(t.addPage(),z(x)):o;let b=x;t.setFontSize(20),t.setTextColor(...J),t.setFont("helvetica","bold"),t.text(l.companyName||"BALANCE GENERAL",F/2,b,{align:"center"}),b+=8,t.setFontSize(14),t.setTextColor(...D),t.text(u("balanceSheet.title","Balance General"),F/2,b,{align:"center"}),b+=6,t.setFontSize(10),t.setTextColor(...k),t.setFont("helvetica","normal"),t.text(`${u("balanceSheet.asOf","Al")} ${l.reportDate}`,F/2,b,{align:"center"}),b+=4,t.setDrawColor(...J),t.setLineWidth(.5),t.line(x,b,F-x,b),b+=10;const ee=b,Y=(o,m,h,S,i,g,_,O)=>{let d=O;return d=w(d,30),t.setFillColor(...i),t.rect(g,d,_,8,"F"),t.setFontSize(11),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.text(m,g+3,d+5.5),d+=12,o.forEach(T=>{d=w(d,25),t.setFillColor(...K),t.rect(g,d,_,6,"F"),t.setFontSize(9),t.setTextColor(...D),t.setFont("helvetica","bold"),t.text(T.category,g+2,d+4),t.text(C(T.total),g+_-2,d+4,{align:"right"}),d+=8,T.accounts.forEach(E=>{d=w(d,8);const P=E.level||0,R=E.subAccounts&&E.subAccounts.length>0,W=P*4;P===0&&R?(t.setFontSize(8.5),t.setFont("helvetica","bold")):P>0?(t.setFontSize(6.5),t.setFont("helvetica","normal")):(t.setFontSize(8),t.setFont("helvetica","normal")),P>0&&(t.setTextColor(180,180,180),t.text("•",g+2+W-3.5,d+3)),t.setTextColor(...P>0?[150,150,150]:k);const me=E.accountNumber||E.code||"";t.text(me,g+2+W,d+3),t.setTextColor(...P>0?[100,100,100]:D);let Z=E.name;const ge=_-50-W;for(;t.getTextWidth(Z)>ge&&Z.length>3;)Z=Z.slice(0,-4)+"...";t.text(Z,g+18+W,d+3),t.setFont("helvetica",P===0&&R?"bold":"normal"),t.setTextColor(...P>0?[100,100,100]:D),t.text(C(E.balance||0),g+_-2,d+3,{align:"right"}),t.setDrawColor(...P>0?[240,240,240]:[230,230,230]),t.setLineWidth(.1),t.line(g+W,d+5,g+_,d+5),d+=6}),d+=2}),d=w(d,15),t.setDrawColor(...i),t.setLineWidth(.5),t.line(g,d,g+_,d),d+=1,t.line(g,d,g+_,d),d+=5,t.setFontSize(10),t.setFont("helvetica","bold"),t.setTextColor(...i),t.text(h,g+2,d),t.text(C(S),g+_-2,d,{align:"right"}),d+=8,d},se=x,L=x+j+10,ae=Y(l.assetGroups,u("balanceSheet.assets","ACTIVOS"),u("balanceSheet.totalAssets","Total Activos"),l.totalAssets,Q,se,j,ee),ie=Y(l.liabilityGroups,u("balanceSheet.liabilities","PASIVOS"),u("balanceSheet.totalLiabilities","Total Pasivos"),l.totalLiabilities,G,L,j,ee),ce=Y(l.equityGroups,u("balanceSheet.equity","PATRIMONIO"),u("balanceSheet.totalEquity","Total Patrimonio"),l.totalEquity,N,L,j,ie+5);b=Math.max(ae,ce)+10,b=w(b,60),t.setFillColor(250,250,250),t.setDrawColor(200,200,200),t.roundedRect(x,b,B,40,3,3,"FD"),t.setFontSize(11),t.setFont("helvetica","bold"),t.setTextColor(...D),t.text(u("balanceSheet.summary","RESUMEN"),x+5,b+7);const q=b+14,te=x+5,H=x+B/4,e=x+B/2,r=x+B*3/4;t.setFontSize(8),t.setFont("helvetica","normal"),t.setTextColor(...k),t.text(u("balanceSheet.totalAssets","Total Activos"),te,q),t.text(u("balanceSheet.totalLiabilities","Total Pasivos"),H,q),t.text(u("balanceSheet.totalEquity","Total Patrimonio"),e,q),t.text(u("balanceSheet.liabilitiesPlusEquity","Pasivo + Patrimonio"),r,q),t.setFontSize(12),t.setFont("helvetica","bold"),t.setTextColor(...Q),t.text(C(l.totalAssets),te,q+7),t.setTextColor(...G),t.text(C(l.totalLiabilities),H,q+7),t.setTextColor(...N),t.text(C(l.totalEquity),e,q+7),t.setTextColor(...l.isBalanced?N:G),t.text(C(l.totalLiabilities+l.totalEquity),r,q+7);const a=l.isBalanced,y=l.totalAssets-(l.totalLiabilities+l.totalEquity);t.setFontSize(9),t.setFont("helvetica","bold"),`${u("balanceSheet.assets","Activos")}${u("balanceSheet.liabilities","Pasivos")}${u("balanceSheet.equity","Patrimonio")}`,`${C(l.totalAssets)}${C(l.totalLiabilities+l.totalEquity)}`,a||`${u("balanceSheet.difference","Diferencia")}${C(y)}`;const p=X-15,f=new Date().toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),n=t.getNumberOfPages();for(let o=1;o<=n;o++)t.setPage(o),t.setDrawColor(200,200,200),t.setLineWidth(.3),t.line(x,p-5,F-x,p-5),t.setFontSize(7),t.setFont("helvetica","normal"),t.setTextColor(...k),t.text(`${u("common.generatedOn","Generado el")}: ${f}`,x,p),t.text("HRM Finance",F-x,p,{align:"right"}),t.text(`${u("common.page","Página")} ${o} ${u("common.of","de")} ${n}`,F/2,p,{align:"center"});const c=`balance_general_${l.reportDate.replace(/[^0-9-]/g,"")}.pdf`;t.save(c)};var Se=A("<div>"),Ce=A("<div><span></span><span>"),$e=A("<div><div><span></span><span>"),_e=A("<span>└"),we=A("<span> sub"),Ee=A("<div><span><span></span><span></span></span><span>"),Ae=A("<div><div><h1></h1><p> </p></div><div><label><input type=checkbox></label><input type=date>"),Fe=A("<div><div>"),ze=A("<div><div></div><div>"),Le=A("<div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div>"),Te=A("<span>✓"),De=A("<div>: "),ke=A("<div><div><strong>:</strong> <!> = <!> + </div><div> = "),qe=A("<div class=no-print>"),Ne=A('<div class="print-only print-header"><div class=company-header><h1>BALANCE GENERAL</h1><p>Al '),Be=A(`<style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .print-only {
          display: none;
        }

        @media print {
          /* Hide non-print elements */
          .no-print,
          button,
          input[type="date"],
          input[type="checkbox"],
          label:has(input[type="checkbox"]),
          nav,
          aside,
          header,
          [data-layout-sidebar],
          [data-layout-header] {
            display: none !important;
          }

          /* Show print-only elements */
          .print-only {
            display: block !important;
          }

          /* Reset page styling */
          body {
            margin: 0;
            padding: 0;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Main container */
          [data-layout-content],
          main {
            margin: 0 !important;
            padding: 15mm !important;
            width: 100% !important;
            max-width: none !important;
          }

          /* Print header styling */
          .print-header {
            text-align: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid #333;
          }

          .company-header h1 {
            font-size: 18pt !important;
            font-weight: bold;
            margin: 0;
          }

          /* Cards styling for print */
          [class*="Card"],
          .card {
            border: 1px solid #ccc !important;
            box-shadow: none !important;
            margin-bottom: 15px !important;
            page-break-inside: avoid;
          }

          /* Section headers */
          [style*="categoryHeaderStyle"],
          div[style*="background: var(--gray-100)"] {
            background: #f5f5f5 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Totals */
          [style*="totalStyle"],
          div[style*="border-top: 2px"] {
            border-top: 2px solid #333 !important;
          }

          /* Summary section colors */
          [style*="background: #e8f5e9"],
          [style*="background: #ffebee"] {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Grid layout adjustments */
          div[style*="grid-template-columns: 1fr 1fr"] {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 15px !important;
          }

          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 10px !important;
          }

          /* Font sizes for print */
          body, p, span, div {
            font-size: 10pt;
          }

          h1 { font-size: 16pt !important; }
          h2, h3 { font-size: 12pt !important; }
          h4 { font-size: 11pt !important; }

          /* Account rows */
          [style*="accountRowStyle"],
          div[style*="border-bottom: 1px solid"] {
            padding: 4px 8px !important;
          }

          /* Page settings */
          @page {
            size: letter portrait;
            margin: 10mm;
          }

          /* Ensure colors print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Summary values */
          div[style*="font-size: 1.5rem"] {
            font-size: 14pt !important;
          }

          /* Footer on each page */
          .print-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 8pt;
            color: #666;
            border-top: 1px solid #ccc;
            padding-top: 5px;
          }
        }

        @media print and (color) {
          /* Ensure colored text prints */
          [style*="color: var(--primary-color)"] {
            color: #1976d2 !important;
          }
          [style*="color: #f44336"] {
            color: #f44336 !important;
          }
          [style*="color: #4caf50"] {
            color: #4caf50 !important;
          }
          [style*="color: #388e3c"] {
            color: #388e3c !important;
          }
          [style*="color: #d32f2f"] {
            color: #d32f2f !important;
          }
        }
      `);const Me=()=>{const{t:l}=be(),[u,t]=re(new Date().toISOString().split("T")[0]),[F,X]=re(!1),[x,ye]=re(!0),[de,B]=re(!1);fe(async()=>{await j()});const j=async()=>{X(!0);try{let e=await ve.getBalances();U.updAccountBalance(e)}catch(e){console.error("Error loading accounts:",e)}finally{X(!1)}},J=()=>{let e=0,r=0;return U?.accountsBalances?.accountMap&&Object.values(U.accountsBalances?.accountMap).forEach(a=>{let y=a?.accountType;!a.parentAccountId&&(y==="Revenue"?e+=a?.balance||0:y==="Expense"&&(r+=a?.balance||0))}),e-r},K=(e,r,a=0)=>r.filter(p=>e===null?!p.parentAccountId:p.parentAccountId===e).map(p=>{const f=K(p.id,r,a+1);return{...p,level:a,subAccounts:f.length>0?f:void 0}}).sort((p,f)=>(p.accountNumber||"").localeCompare(f.accountNumber||"")),Q=e=>{const r=[],a=y=>{r.push(y),y.subAccounts&&y.subAccounts.forEach(p=>a(p))};return e.forEach(y=>a(y)),r},G=e=>{const r=new Map,a=[];U?.accountsBalances?.accountMap&&Object.values(U.accountsBalances?.accountMap).forEach(n=>{const c=n?.accountType,o=U?.accountsBalances?.accountMapIDs?.[n?.id]?.transactionCount,m=n?.year===2025;c===e&&o&&m&&a.push(n)});const y=K(null,a,0),p=e||l("common.uncategorized","Sin categorizar");if(r.has(p)||r.set(p,[]),y.forEach(n=>{r.get(p).push(n)}),e==="Equity"){const c={id:"profit-loss",accountNumber:"Resultado",name:"(ganancia o pérdida)",balance:J(),level:0,accountType:"Equity",isActive:!0};r.get(p)&&r.get(p).push(c)}return Array.from(r.entries()).map(([n,c])=>{const o=Q(c),m=c.reduce((h,S)=>h+(S.balance||0),0);return{category:n,accounts:o,total:m}})},N=I(()=>G("Asset")),D=I(()=>G("Liability")),k=I(()=>G("Equity")),C=I(()=>N().reduce((e,r)=>e+r.total,0)),z=I(()=>D().reduce((e,r)=>e+r.total,0)),w=I(()=>k().reduce((e,r)=>e+r.total,0)),b=I(()=>Math.abs(C()-(z()+w()))<.01),ee=()=>{const e=[],r=new Date(u()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});e.push(v(["BALANCE GENERAL"])),e.push(v([`Fecha: ${r}`])),e.push(v([])),e.push(v(["Tipo","Categoría","Nivel","Código","Cuenta","Saldo"]));const a=(c,o)=>o===0?c:"  ".repeat(o)+"└ "+c;N().forEach(c=>{c.accounts.forEach(o=>{e.push(v([l("balanceSheet.assets"),c.category,(o.level||0).toString(),o.accountNumber||o.code||"",a(o.name,o.level||0),(o.balance||0).toFixed(2)]))}),e.push(v(["",`Subtotal ${c.category}`,"","","",c.total.toFixed(2)]))}),e.push(v(["",l("balanceSheet.totalAssets"),"","","",C().toFixed(2)])),e.push(v([])),D().forEach(c=>{c.accounts.forEach(o=>{e.push(v([l("balanceSheet.liabilities"),c.category,(o.level||0).toString(),o.accountNumber||o.code||"",a(o.name,o.level||0),(o.balance||0).toFixed(2)]))}),e.push(v(["",`Subtotal ${c.category}`,"","","",c.total.toFixed(2)]))}),e.push(v(["",l("balanceSheet.totalLiabilities"),"","","",z().toFixed(2)])),e.push(v([])),k().forEach(c=>{c.accounts.forEach(o=>{e.push(v([l("balanceSheet.equity"),c.category,(o.level||0).toString(),o.accountNumber||o.code||"",a(o.name,o.level||0),(o.balance||0).toFixed(2)]))}),e.push(v(["",`Subtotal ${c.category}`,"","","",c.total.toFixed(2)]))}),e.push(v(["",l("balanceSheet.totalEquity"),"","","",w().toFixed(2)])),e.push(v([])),e.push(v(["RESUMEN"])),e.push(v([l("balanceSheet.totalAssets"),"","","","",C().toFixed(2)])),e.push(v([l("balanceSheet.totalLiabilities"),"","","","",z().toFixed(2)])),e.push(v([l("balanceSheet.totalEquity"),"","","","",w().toFixed(2)])),e.push(v([l("balanceSheet.liabilitiesPlusEquity"),"","","","",(z()+w()).toFixed(2)])),e.push(v(["Diferencia","","","","",(C()-(z()+w())).toFixed(2)])),e.push(v(["Balance Cuadrado","","","","",b()?"Sí":"No"]));const y=e.join(`
`),p=new Blob(["\uFEFF"+y],{type:"text/csv;charset=utf-8;"}),f=URL.createObjectURL(p),n=document.createElement("a");n.href=f,n.download=`balance_general_${u()}.csv`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(f)},Y=()=>{B(!0),setTimeout(()=>{window.print(),B(!1)},100)},se=()=>{const e=new Date(u()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});xe({companyName:"HRM Finance",reportDate:e,assetGroups:N(),liabilityGroups:D(),equityGroups:k(),totalAssets:C(),totalLiabilities:z(),totalEquity:w(),isBalanced:b()},l)},L=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e||0),ae={display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"2rem","flex-wrap":"wrap",gap:"1rem"},ie={"margin-bottom":"1.5rem"},ce={display:"flex","justify-content":"space-between","align-items":"center",padding:"0.75rem",background:"var(--gray-100)","border-radius":"var(--border-radius-sm)","font-weight":"600","margin-bottom":"0.5rem"},q={display:"flex","justify-content":"space-between","font-weight":"bold","font-size":"1.1rem","border-top":"2px solid var(--border-color)","padding-top":"0.75rem","margin-top":"1rem"},te=(e,r)=>({display:"flex","justify-content":"space-between","align-items":"center",padding:`0.5rem 0.75rem 0.5rem ${.75+e*1.25}rem`,"border-bottom":e===0?"1px solid var(--border-color)":"1px solid var(--gray-100)","font-size":e===0?"0.9rem":"0.85rem","background-color":e===0&&r?"var(--gray-50)":"transparent","font-weight":e===0&&r?"600":"400"}),H=e=>$(pe,{get title(){return e.title},style:ie,get children(){return[$(M,{get when(){return e.groups.length===0},get children(){var r=Se();return r.style.setProperty("text-align","center"),r.style.setProperty("padding","1rem"),r.style.setProperty("color","var(--text-muted)"),s(r,()=>l("balanceSheet.noAccounts","No hay cuentas registradas")),r}}),$(ue,{get each(){return e.groups},children:r=>(()=>{var a=$e(),y=a.firstChild,p=y.firstChild,f=p.nextSibling;return a.style.setProperty("margin-bottom","1rem"),oe(y,ce),s(p,()=>r.category),s(f,()=>L(r.total)),s(a,$(M,{get when(){return x()},get children(){return $(ue,{get each(){return r.accounts},children:n=>(()=>{var c=Ee(),o=c.firstChild,m=o.firstChild,h=m.nextSibling,S=o.nextSibling;return o.style.setProperty("display","flex"),o.style.setProperty("align-items","center"),o.style.setProperty("gap","0.5rem"),s(o,$(M,{get when(){return(n.level||0)>0},get children(){var i=_e();return i.style.setProperty("color","var(--gray-400)"),i.style.setProperty("font-size","0.7rem"),i.style.setProperty("margin-right","0.25rem"),i}}),m),m.style.setProperty("min-width","60px"),s(m,()=>n.accountNumber||n.code),s(h,()=>n.name),s(o,$(M,{get when(){return n.subAccounts&&n.subAccounts.length>0},get children(){var i=we(),g=i.firstChild;return i.style.setProperty("font-size","0.7rem"),i.style.setProperty("color","#fff"),i.style.setProperty("background","var(--primary-light, #e3f2fd)"),i.style.setProperty("padding","0.1rem 0.4rem"),i.style.setProperty("border-radius","10px"),s(i,()=>n.subAccounts.length,g),i}}),null),s(S,()=>L(n.balance||0)),V(i=>{var g=te(n.level||0,!!n.subAccounts),_=(n.level||0)===0?"var(--text-muted)":"var(--gray-400)",O=(n.level||0)===0?"0.8rem":"0.75rem",d=(n.level||0)===0?"inherit":"var(--text-muted)",T=(n.level||0)===0?"600":"400",E=(n.level||0)===0?"inherit":"var(--text-muted)",P=(n.level||0)===0?"0.9rem":"0.85rem";return i.e=oe(c,g,i.e),_!==i.t&&((i.t=_)!=null?m.style.setProperty("color",_):m.style.removeProperty("color")),O!==i.a&&((i.a=O)!=null?m.style.setProperty("font-size",O):m.style.removeProperty("font-size")),d!==i.o&&((i.o=d)!=null?h.style.setProperty("color",d):h.style.removeProperty("color")),T!==i.i&&((i.i=T)!=null?S.style.setProperty("font-weight",T):S.style.removeProperty("font-weight")),E!==i.n&&((i.n=E)!=null?S.style.setProperty("color",E):S.style.removeProperty("color")),P!==i.s&&((i.s=P)!=null?S.style.setProperty("font-size",P):S.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),c})()})}}),null),a})()}),(()=>{var r=Ce(),a=r.firstChild,y=a.nextSibling;return s(a,()=>e.totalLabel),s(y,()=>L(e.total)),V(p=>oe(r,{...q,color:e.color},p)),r})()]}});return $(Pe,{get title(){return l("balanceSheet.title")},get children(){return[(()=>{var e=Ae(),r=e.firstChild,a=r.firstChild,y=a.nextSibling,p=y.firstChild,f=r.nextSibling,n=f.firstChild,c=n.firstChild,o=n.nextSibling;return oe(e,ae),a.style.setProperty("margin","0"),s(a,()=>l("balanceSheet.title","Balance General")),y.style.setProperty("margin","0.5rem 0 0 0"),y.style.setProperty("color","var(--text-muted)"),s(y,()=>l("balanceSheet.asOf","A la fecha del"),p),s(y,()=>new Date(u()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),null),f.style.setProperty("display","flex"),f.style.setProperty("gap","1rem"),f.style.setProperty("align-items","center"),f.style.setProperty("flex-wrap","wrap"),n.style.setProperty("display","flex"),n.style.setProperty("align-items","center"),n.style.setProperty("gap","0.5rem"),n.style.setProperty("cursor","pointer"),c.addEventListener("change",m=>ye(m.target.checked)),s(n,()=>l("balanceSheet.showDetails","Mostrar detalles"),null),o.addEventListener("change",m=>t(m.target.value)),o.style.setProperty("padding","0.5rem"),o.style.setProperty("border","1px solid var(--border-color)"),o.style.setProperty("border-radius","var(--border-radius-sm)"),s(f,$(le,{variant:"primary",onClick:j,get disabled(){return F()},get children(){return ne(()=>!!F())()?l("common.loading","Cargando..."):l("balanceSheet.generateReport","Generar Reporte")}}),null),V(()=>c.checked=x()),V(()=>o.value=u()),e})(),$(M,{get when(){return F()},get children(){var e=Fe(),r=e.firstChild;return e.style.setProperty("text-align","center"),e.style.setProperty("padding","3rem"),r.style.setProperty("width","40px"),r.style.setProperty("height","40px"),r.style.setProperty("border","3px solid var(--border-color)"),r.style.setProperty("border-top-color","var(--primary-color)"),r.style.setProperty("border-radius","50%"),r.style.setProperty("animation","spin 1s linear infinite"),r.style.setProperty("margin","0 auto 1rem"),s(e,()=>l("common.loading","Cargando..."),null),e}}),$(M,{get when(){return!F()},get children(){return[(()=>{var e=ze(),r=e.firstChild,a=r.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","1fr 1fr"),e.style.setProperty("gap","2rem"),s(r,$(H,{get groups(){return N()},get title(){return l("balanceSheet.assets","Activos")},get totalLabel(){return l("balanceSheet.totalAssets","Total Activos")},get total(){return C()},color:"var(--primary-color)"})),s(a,$(H,{get groups(){return D()},get title(){return l("balanceSheet.liabilities","Pasivos")},get totalLabel(){return l("balanceSheet.totalLiabilities","Total Pasivos")},get total(){return z()},color:"#f44336"}),null),s(a,$(H,{get groups(){return k()},get title(){return l("balanceSheet.equity","Patrimonio")},get totalLabel(){return l("balanceSheet.totalEquity","Total Patrimonio")},get total(){return w()},color:"#4caf50"}),null),e})(),$(pe,{get title(){return l("balanceSheet.summary","Resumen")},style:{"margin-top":"2rem"},get children(){return[(()=>{var e=Le(),r=e.firstChild,a=r.firstChild,y=a.nextSibling,p=y.nextSibling,f=p.firstChild,n=r.nextSibling,c=n.firstChild,o=c.nextSibling,m=o.nextSibling,h=m.firstChild,S=n.nextSibling,i=S.firstChild,g=i.nextSibling,_=g.nextSibling,O=_.firstChild,d=S.nextSibling,T=d.firstChild,E=T.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","repeat(4, 1fr)"),e.style.setProperty("gap","2rem"),r.style.setProperty("text-align","center"),a.style.setProperty("font-size","0.875rem"),a.style.setProperty("color","var(--text-muted)"),a.style.setProperty("margin-bottom","0.5rem"),s(a,()=>l("balanceSheet.totalAssets","Total Activos")),y.style.setProperty("font-size","1.5rem"),y.style.setProperty("font-weight","bold"),y.style.setProperty("color","var(--primary-color)"),s(y,()=>L(C())),p.style.setProperty("font-size","0.75rem"),p.style.setProperty("color","var(--text-muted)"),s(p,()=>N().reduce((P,R)=>P+R.accounts.length,0),f),s(p,()=>l("balanceSheet.accounts","cuentas"),null),n.style.setProperty("text-align","center"),c.style.setProperty("font-size","0.875rem"),c.style.setProperty("color","var(--text-muted)"),c.style.setProperty("margin-bottom","0.5rem"),s(c,()=>l("balanceSheet.totalLiabilities","Total Pasivos")),o.style.setProperty("font-size","1.5rem"),o.style.setProperty("font-weight","bold"),o.style.setProperty("color","#f44336"),s(o,()=>L(z())),m.style.setProperty("font-size","0.75rem"),m.style.setProperty("color","var(--text-muted)"),s(m,()=>D().reduce((P,R)=>P+R.accounts.length,0),h),s(m,()=>l("balanceSheet.accounts","cuentas"),null),S.style.setProperty("text-align","center"),i.style.setProperty("font-size","0.875rem"),i.style.setProperty("color","var(--text-muted)"),i.style.setProperty("margin-bottom","0.5rem"),s(i,()=>l("balanceSheet.totalEquity","Total Patrimonio")),g.style.setProperty("font-size","1.5rem"),g.style.setProperty("font-weight","bold"),g.style.setProperty("color","#4caf50"),s(g,()=>L(w())),_.style.setProperty("font-size","0.75rem"),_.style.setProperty("color","var(--text-muted)"),s(_,()=>k().reduce((P,R)=>P+R.accounts.length,0),O),s(_,()=>l("balanceSheet.accounts","cuentas"),null),d.style.setProperty("text-align","center"),T.style.setProperty("font-size","0.875rem"),T.style.setProperty("color","var(--text-muted)"),T.style.setProperty("margin-bottom","0.5rem"),s(T,()=>l("balanceSheet.liabilitiesPlusEquity","Pasivos + Patrimonio")),E.style.setProperty("font-size","1.5rem"),E.style.setProperty("font-weight","bold"),s(E,()=>L(z()+w())),V(P=>(P=b()?"#4caf50":"#f44336")!=null?E.style.setProperty("color",P):E.style.removeProperty("color")),e})(),(()=>{var e=ke(),r=e.firstChild,a=r.firstChild,y=a.firstChild,p=a.nextSibling,f=p.nextSibling,n=f.nextSibling,c=n.nextSibling;c.nextSibling;var o=r.nextSibling,m=o.firstChild;return e.style.setProperty("margin-top","2rem"),e.style.setProperty("padding","1rem"),e.style.setProperty("border-radius","var(--border-radius)"),e.style.setProperty("text-align","center"),r.style.setProperty("font-size","1rem"),r.style.setProperty("margin-bottom","0.5rem"),s(a,()=>l("balanceSheet.equation","Ecuación Contable"),y),s(r,()=>l("balanceSheet.assets","Activos"),f),s(r,()=>l("balanceSheet.liabilities","Pasivos"),c),s(r,()=>l("balanceSheet.equity","Patrimonio"),null),o.style.setProperty("font-size","1.2rem"),o.style.setProperty("font-weight","bold"),s(o,()=>L(C()),m),s(o,()=>L(z()+w()),null),s(o,$(M,{get when(){return b()},get children(){var h=Te();return h.style.setProperty("margin-left","0.5rem"),h}}),null),s(e,$(M,{get when(){return!b()},get children(){var h=De(),S=h.firstChild;return h.style.setProperty("font-size","0.875rem"),h.style.setProperty("color","#d32f2f"),h.style.setProperty("margin-top","0.5rem"),s(h,()=>l("balanceSheet.difference","Diferencia"),S),s(h,()=>L(C()-(z()+w())),null),h}}),null),V(h=>{var S=b()?"#e8f5e9":"#ffebee",i=b()?"#388e3c":"#d32f2f";return S!==h.e&&((h.e=S)!=null?e.style.setProperty("background",S):e.style.removeProperty("background")),i!==h.t&&((h.t=i)!=null?o.style.setProperty("color",i):o.style.removeProperty("color")),h},{e:void 0,t:void 0}),e})()]}}),(()=>{var e=qe();return e.style.setProperty("display","flex"),e.style.setProperty("gap","1rem"),e.style.setProperty("justify-content","flex-end"),e.style.setProperty("margin-top","1.5rem"),s(e,$(le,{variant:"outline",onClick:Y,get children(){return["🖨️ ",ne(()=>l("common.print","Imprimir"))]}}),null),s(e,$(le,{variant:"secondary",onClick:ee,get children(){return["📊 ",ne(()=>l("balanceSheet.exportCSV","Exportar CSV"))]}}),null),s(e,$(le,{variant:"primary",onClick:se,get children(){return["📄 ",ne(()=>l("balanceSheet.exportPDF","Exportar PDF"))]}}),null),e})()]}}),(()=>{var e=Ne(),r=e.firstChild,a=r.firstChild,y=a.nextSibling;return y.firstChild,a.style.setProperty("margin","0"),a.style.setProperty("font-size","1.5rem"),y.style.setProperty("margin","0.25rem 0 0 0"),y.style.setProperty("font-size","0.9rem"),y.style.setProperty("color","#666"),s(y,()=>new Date(u()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),null),e})(),Be()]}})};export{Me as default};
