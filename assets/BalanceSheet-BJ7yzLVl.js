import{E as ve,u as Pe,c as ne,o as xe,a as Se,b as Y,e as ge,d as le,f as R,g as P,t as A,s as se,i as c,B as ie,m as Z,h as H,S as M,C as he,L as Ce,j as $e,F as be,k as x}from"./index-DejmJCkw.js";const Ee=(s,f)=>{const t=new ve({orientation:"portrait",unit:"mm",format:"letter"}),z=t.internal.pageSize.getWidth(),X=t.internal.pageSize.getHeight(),S=15,me=X-25,j=z-S*2,O=(j-10)/2,K=[25,118,210],ae=[245,245,245],Q=[25,118,210],U=[244,67,54],W=[76,175,80],B=[33,33,33],N=[117,117,117],_=r=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(r||0),G=r=>(t.setFontSize(8),t.setTextColor(...N),t.text(`${f("balanceSheet.title","Balance General")} - ${s.reportDate}`,S,r),r+8),F=(r,a)=>r+a>me?(t.addPage(),G(S)):r;let v=S;t.setFontSize(20),t.setTextColor(...K),t.setFont("helvetica","bold"),t.text(s.companyName||"BALANCE GENERAL",z/2,v,{align:"center"}),v+=8,t.setFontSize(14),t.setTextColor(...B),t.text(f("balanceSheet.title","Balance General"),z/2,v,{align:"center"}),v+=6,t.setFontSize(10),t.setTextColor(...N),t.setFont("helvetica","normal"),t.text(`${f("balanceSheet.asOf","Al")} ${s.reportDate}`,z/2,v,{align:"center"}),v+=4,t.setDrawColor(...K),t.setLineWidth(.5),t.line(S,v,z-S,v),v+=10;const T=v,I=(r,a,l,b,p,u,o,C)=>{let y=C;return y=F(y,30),t.setFillColor(...p),t.rect(u,y,o,8,"F"),t.setFontSize(11),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.text(a,u+3,y+5.5),y+=12,r.forEach(E=>{y=F(y,25),t.setFillColor(...ae),t.rect(u,y,o,6,"F"),t.setFontSize(9),t.setTextColor(...B),t.setFont("helvetica","bold"),t.text(E.category,u+2,y+4),t.text(_(E.total),u+o-2,y+4,{align:"right"}),y+=8,E.accounts.forEach(m=>{y=F(y,8);const $=m.level||0,D=m.subAccounts&&m.subAccounts.length>0,w=$*4;$===0&&D?(t.setFontSize(8.5),t.setFont("helvetica","bold")):$>0?(t.setFontSize(6.5),t.setFont("helvetica","normal")):(t.setFontSize(8),t.setFont("helvetica","normal")),$>0&&(t.setTextColor(180,180,180),t.text("•",u+2+w-3.5,y+3)),t.setTextColor(...$>0?[150,150,150]:N);const k=m.accountNumber||m.code||"";t.text(k,u+2+w,y+3),t.setTextColor(...$>0?[100,100,100]:B);let J=m.name;const fe=o-50-w;for(;t.getTextWidth(J)>fe&&J.length>3;)J=J.slice(0,-4)+"...";t.text(J,u+18+w,y+3),t.setFont("helvetica",$===0&&D?"bold":"normal"),t.setTextColor(...$>0?[100,100,100]:B),t.text(_(m.balance||0),u+o-2,y+3,{align:"right"}),t.setDrawColor(...$>0?[240,240,240]:[230,230,230]),t.setLineWidth(.1),t.line(u+w,y+5,u+o,y+5),y+=6}),y+=2}),y=F(y,15),t.setDrawColor(...p),t.setLineWidth(.5),t.line(u,y,u+o,y),y+=1,t.line(u,y,u+o,y),y+=5,t.setFontSize(10),t.setFont("helvetica","bold"),t.setTextColor(...p),t.text(l,u+2,y),t.text(_(b),u+o-2,y,{align:"right"}),y+=8,y},ce=S,ee=S+O+10,ye=I(s.assetGroups,f("balanceSheet.assets","ACTIVOS"),f("balanceSheet.totalAssets","Total Activos"),s.totalAssets,Q,ce,O,T),L=I(s.liabilityGroups,f("balanceSheet.liabilities","PASIVOS"),f("balanceSheet.totalLiabilities","Total Pasivos"),s.totalLiabilities,U,ee,O,T),de=I(s.equityGroups,f("balanceSheet.equity","PATRIMONIO"),f("balanceSheet.totalEquity","Total Patrimonio"),s.totalEquity,W,ee,O,L+5);v=Math.max(ye,de)+10,v=F(v,60),t.setFillColor(250,250,250),t.setDrawColor(200,200,200),t.roundedRect(S,v,j,40,3,3,"FD"),t.setFontSize(11),t.setFont("helvetica","bold"),t.setTextColor(...B),t.text(f("balanceSheet.summary","RESUMEN"),S+5,v+7);const q=v+14,te=S+5,re=S+j/4,oe=S+j/2,V=S+j*3/4;t.setFontSize(8),t.setFont("helvetica","normal"),t.setTextColor(...N),t.text(f("balanceSheet.totalAssets","Total Activos"),te,q),t.text(f("balanceSheet.totalLiabilities","Total Pasivos"),re,q),t.text(f("balanceSheet.totalEquity","Total Patrimonio"),oe,q),t.text(f("balanceSheet.liabilitiesPlusEquity","Pasivo + Patrimonio"),V,q),t.setFontSize(12),t.setFont("helvetica","bold"),t.setTextColor(...Q),t.text(_(s.totalAssets),te,q+7),t.setTextColor(...U),t.text(_(s.totalLiabilities),re,q+7),t.setTextColor(...W),t.text(_(s.totalEquity),oe,q+7),t.setTextColor(...s.isBalanced?W:U),t.text(_(s.totalLiabilities+s.totalEquity),V,q+7);const e=s.isBalanced,n=s.totalAssets-(s.totalLiabilities+s.totalEquity);t.setFontSize(9),t.setFont("helvetica","bold"),`${f("balanceSheet.assets","Activos")}${f("balanceSheet.liabilities","Pasivos")}${f("balanceSheet.equity","Patrimonio")}`,`${_(s.totalAssets)}${_(s.totalLiabilities+s.totalEquity)}`,e||`${f("balanceSheet.difference","Diferencia")}${_(n)}`;const i=X-15,d=new Date().toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),h=t.getNumberOfPages();for(let r=1;r<=h;r++)t.setPage(r),t.setDrawColor(200,200,200),t.setLineWidth(.3),t.line(S,i-5,z-S,i-5),t.setFontSize(7),t.setFont("helvetica","normal"),t.setTextColor(...N),t.text(`${f("common.generatedOn","Generado el")}: ${d}`,S,i),t.text("HRM Finance",z-S,i,{align:"right"}),t.text(`${f("common.page","Página")} ${r} ${f("common.of","de")} ${h}`,z/2,i,{align:"center"});const g=`balance_general_${s.reportDate.replace(/[^0-9-]/g,"")}.pdf`;t.save(g)};var we=A("<div>"),Ae=A("<div><span></span><span>"),_e=A("<div><div><span></span><span>"),pe=A("<span>"),Fe=A("<span> tx"),Te=A("<span> sub"),ze=A("<div><span><span></span><span></span></span><span>"),Le=A("<div><div><h1></h1><p> </p></div><div><label><input type=checkbox></label><input type=date>"),De=A("<div><div>"),Ne=A("<div><div></div><div>"),Ie=A("<div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div>"),ke=A("<span>✓"),Me=A("<div>: "),qe=A("<div><div><strong>:</strong> <!> = <!> + </div><div> = "),Be=A("<div class=no-print>"),Re=A('<div class="print-only print-header"><div class=company-header><h1>BALANCE GENERAL</h1><p>Al '),je=A(`<style>
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
      `);const Ge=()=>{const{t:s}=Pe(),[f,t]=ne(new Date().toISOString().split("T")[0]),[z,X]=ne(!1),[S,ue]=ne(!0),[me,j]=ne(!1);xe(async()=>{await O()});const O=async()=>{X(!0);try{let e=await Se.getBalances();Y.updAccountBalance(e);try{await ge.fetchJournalEntries({status:"all",dateTo:f()})}catch{}try{(!le.entities||le.entities.length===0)&&await le.loadEntities()}catch{}}catch(e){console.error("Error loading accounts:",e)}finally{X(!1)}},K=()=>{let e=0,n=0;return Y?.accountsBalances?.accountMap&&Object.values(Y.accountsBalances?.accountMap).forEach(i=>{let d=i?.accountType;!i.parentAccountId&&(d==="Revenue"?e+=i?.balance||0:d==="Expense"&&(n+=i?.balance||0))}),e-n},ae=R(()=>{const e=new Map;for(const n of le.entities||[])n.id&&e.set(n.id,{name:n.name,type:n.type,taxId:n.taxId});return e}),Q=R(()=>{const e=new Map,n=ge.journalEntries||[],i=ae();for(const h of n)for(const g of h.lines||[]){const r=g,a=r.accountId;if(!a)continue;const l=r.customerId||r.providerId||r.entityId||r.referenceId;if(!l)continue;const b=i.get(l),p=b?.name||r.entityName||r.customerName||r.providerName||"",u=b?.type||(r.customerId?"customer":r.providerId?"provider":r.entityType)||void 0,o=b?.taxId||r.taxId||void 0,C=Number(r.debitAmount)||0,y=Number(r.creditAmount)||0;let E=e.get(a);E||(E=new Map,e.set(a,E));const m=E.get(l)||{entityId:l,entityName:p,entityType:u,taxId:o,debit:0,credit:0,balance:0,transactionCount:0};m.debit+=C,m.credit+=y,m.balance=m.debit-m.credit,m.transactionCount+=1,!m.entityName&&p&&(m.entityName=p),!m.entityType&&u&&(m.entityType=u),!m.taxId&&o&&(m.taxId=o),E.set(l,m)}const d=new Map;for(const[h,g]of e){const r=Array.from(g.values()).filter(a=>Math.abs(a.balance)>.001).sort((a,l)=>Math.abs(l.balance)-Math.abs(a.balance));r.length>0&&d.set(h,r)}return d}),U=(e,n,i=0)=>{const d=n.filter(g=>e===null?!g.parentAccountId:g.parentAccountId===e),h=Q();return d.map(g=>{const r=U(g.id,n,i+1);let a=[];r.length===0&&(a=(h.get(g.id)||[]).map(p=>({id:`${g.id}::${p.entityId}`,accountNumber:"—",name:p.entityName||p.entityId,accountType:g.accountType,category:g.category,description:"",balance:p.balance,isActive:!0,parentAccountId:g.id,createdDate:"",lastModified:"",level:i+1,isEntitySubAccount:!0,entityId:p.entityId,entityType:p.entityType,entityTaxId:p.taxId,transactionCount:p.transactionCount})));const l=[...r,...a];return{...g,level:i,subAccounts:l.length>0?l:void 0}}).sort((g,r)=>(g.accountNumber||"").localeCompare(r.accountNumber||""))},W=e=>{const n=[],i=d=>{n.push(d),d.subAccounts&&d.subAccounts.forEach(h=>i(h))};return e.forEach(d=>i(d)),n},B=e=>{const n=new Map,i=[];Y?.accountsBalances?.accountMap&&Object.values(Y.accountsBalances?.accountMap).forEach(r=>{const a=r?.accountType,l=Y?.accountsBalances?.accountMapIDs?.[r?.id]?.transactionCount,b=r?.year===$e.getSelectedYear();a===e&&l&&b&&i.push(r)});const d=U(null,i,0),h=e||s("common.uncategorized","Sin categorizar");if(n.has(h)||n.set(h,[]),d.forEach(r=>{n.get(h).push(r)}),e==="Equity"){const a={id:"profit-loss",accountNumber:"Resultado",name:"(ganancia o pérdida)",balance:K(),level:0,accountType:"Equity",isActive:!0};n.get(h)&&n.get(h).push(a)}return Array.from(n.entries()).map(([r,a])=>{const l=W(a),b=a.reduce((p,u)=>p+(u.balance||0),0);return{category:r,accounts:l,total:b}})},N=R(()=>B("Asset")),_=R(()=>B("Liability")),G=R(()=>B("Equity")),F=R(()=>N().reduce((e,n)=>e+n.total,0)),v=R(()=>_().reduce((e,n)=>e+n.total,0)),T=R(()=>G().reduce((e,n)=>e+n.total,0)),I=R(()=>Math.abs(F()-(v()+T()))<.01),ce=()=>{const e=[],n=new Date(f()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});e.push(x(["BALANCE GENERAL"])),e.push(x([`Fecha: ${n}`])),e.push(x([])),e.push(x(["Tipo","Categoría","Nivel","Código","Cuenta","Saldo"]));const i=(a,l)=>l===0?a:"  ".repeat(l)+"└ "+a;N().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.assets"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",i(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalAssets"),"","","",F().toFixed(2)])),e.push(x([])),_().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.liabilities"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",i(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalLiabilities"),"","","",v().toFixed(2)])),e.push(x([])),G().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.equity"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",i(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalEquity"),"","","",T().toFixed(2)])),e.push(x([])),e.push(x(["RESUMEN"])),e.push(x([s("balanceSheet.totalAssets"),"","","","",F().toFixed(2)])),e.push(x([s("balanceSheet.totalLiabilities"),"","","","",v().toFixed(2)])),e.push(x([s("balanceSheet.totalEquity"),"","","","",T().toFixed(2)])),e.push(x([s("balanceSheet.liabilitiesPlusEquity"),"","","","",(v()+T()).toFixed(2)])),e.push(x(["Diferencia","","","","",(F()-(v()+T())).toFixed(2)])),e.push(x(["Balance Cuadrado","","","","",I()?"Sí":"No"]));const d=e.join(`
`),h=new Blob(["\uFEFF"+d],{type:"text/csv;charset=utf-8;"}),g=URL.createObjectURL(h),r=document.createElement("a");r.href=g,r.download=`balance_general_${f()}.csv`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(g)},ee=()=>{j(!0),setTimeout(()=>{window.print(),j(!1)},100)},ye=()=>{const e=new Date(f()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});Ee({companyName:"HRM Finance",reportDate:e,assetGroups:N(),liabilityGroups:_(),equityGroups:G(),totalAssets:F(),totalLiabilities:v(),totalEquity:T(),isBalanced:I()},s)},L=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e||0),de={display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"2rem","flex-wrap":"wrap",gap:"1rem"},q={"margin-bottom":"1.5rem"},te={display:"flex","justify-content":"space-between","align-items":"center",padding:"0.75rem",background:"var(--gray-100)","border-radius":"var(--border-radius-sm)","font-weight":"600","margin-bottom":"0.5rem"},re={display:"flex","justify-content":"space-between","font-weight":"bold","font-size":"1.1rem","border-top":"2px solid var(--border-color)","padding-top":"0.75rem","margin-top":"1rem"},oe=(e,n)=>({display:"flex","justify-content":"space-between","align-items":"center",padding:`0.5rem 0.75rem 0.5rem ${.75+e*1.25}rem`,"border-bottom":e===0?"1px solid var(--border-color)":"1px solid var(--gray-100)","font-size":e===0?"0.9rem":"0.85rem","background-color":e===0&&n?"var(--gray-50)":"transparent","font-weight":e===0&&n?"600":"400"}),V=e=>P(he,{get title(){return e.title},style:q,get children(){return[P(M,{get when(){return e.groups.length===0},get children(){var n=we();return n.style.setProperty("text-align","center"),n.style.setProperty("padding","1rem"),n.style.setProperty("color","var(--text-muted)"),c(n,()=>s("balanceSheet.noAccounts","No hay cuentas registradas")),n}}),P(be,{get each(){return e.groups},children:n=>(()=>{var i=_e(),d=i.firstChild,h=d.firstChild,g=h.nextSibling;return i.style.setProperty("margin-bottom","1rem"),se(d,te),c(h,()=>n.category),c(g,()=>L(n.total)),c(i,P(M,{get when(){return S()},get children(){return P(be,{get each(){return n.accounts},children:r=>(()=>{var a=ze(),l=a.firstChild,b=l.firstChild,p=b.nextSibling,u=l.nextSibling;return l.style.setProperty("display","flex"),l.style.setProperty("align-items","center"),l.style.setProperty("gap","0.5rem"),c(l,P(M,{get when(){return(r.level||0)>0},get children(){var o=pe();return o.style.setProperty("font-size","0.7rem"),o.style.setProperty("margin-right","0.25rem"),c(o,()=>r.isEntitySubAccount?"•":"└"),H(C=>(C=r.isEntitySubAccount?"#512da8":"var(--gray-400)")!=null?o.style.setProperty("color",C):o.style.removeProperty("color")),o}}),b),b.style.setProperty("min-width","60px"),c(b,()=>r.isEntitySubAccount?"":r.accountNumber||r.code),c(p,()=>r.name),c(l,P(M,{get when(){return r.isEntitySubAccount},get children(){return[Z(()=>(()=>{const o=r.entityType,C=o==="customer"?"CLIENTE":o==="provider"?"PROVEEDOR":o==="both"?"CLIENTE / PROVEEDOR":"ENTIDAD",y=o==="customer"?"#e8f5e9":o==="provider"?"#e3f2fd":o==="both"?"#fff3e0":"#ede7f6",E=o==="customer"?"#2e7d32":o==="provider"?"#1565c0":o==="both"?"#e65100":"#512da8";return(()=>{var m=pe();return m.style.setProperty("font-size","0.65rem"),E!=null?m.style.setProperty("color",E):m.style.removeProperty("color"),y!=null?m.style.setProperty("background",y):m.style.removeProperty("background"),m.style.setProperty("padding","0.05rem 0.4rem"),m.style.setProperty("border-radius","999px"),m.style.setProperty("font-weight","600"),m.style.setProperty("letter-spacing","0.3px"),c(m,C),m})()})()),P(M,{get when(){return r.entityTaxId},get children(){var o=pe();return o.style.setProperty("font-size","0.65rem"),o.style.setProperty("color","var(--text-muted)"),o.style.setProperty("font-family","monospace"),c(o,()=>r.entityTaxId),o}}),P(M,{get when(){return r.transactionCount},get children(){var o=Fe(),C=o.firstChild;return o.style.setProperty("font-size","0.65rem"),o.style.setProperty("color","var(--text-muted)"),c(o,()=>r.transactionCount,C),o}})]}}),null),c(l,P(M,{get when(){return r.subAccounts&&r.subAccounts.length>0&&!r.isEntitySubAccount},get children(){var o=Te(),C=o.firstChild;return o.style.setProperty("font-size","0.7rem"),o.style.setProperty("color","#fff"),o.style.setProperty("background","var(--primary-light, #e3f2fd)"),o.style.setProperty("padding","0.1rem 0.4rem"),o.style.setProperty("border-radius","10px"),c(o,()=>r.subAccounts.length,C),o}}),null),c(u,()=>L(r.balance||0)),H(o=>{var C=oe(r.level||0,!!r.subAccounts),y=(r.level||0)===0?"var(--text-muted)":"var(--gray-400)",E=(r.level||0)===0?"0.8rem":"0.75rem",m=(r.level||0)===0?"inherit":r.isEntitySubAccount?"#512da8":"var(--text-muted)",$=r.isEntitySubAccount?"italic":"normal",D=(r.level||0)===0?"600":"400",w=(r.level||0)===0?"inherit":"var(--text-muted)",k=(r.level||0)===0?"0.9rem":"0.85rem";return o.e=se(a,C,o.e),y!==o.t&&((o.t=y)!=null?b.style.setProperty("color",y):b.style.removeProperty("color")),E!==o.a&&((o.a=E)!=null?b.style.setProperty("font-size",E):b.style.removeProperty("font-size")),m!==o.o&&((o.o=m)!=null?p.style.setProperty("color",m):p.style.removeProperty("color")),$!==o.i&&((o.i=$)!=null?p.style.setProperty("font-style",$):p.style.removeProperty("font-style")),D!==o.n&&((o.n=D)!=null?u.style.setProperty("font-weight",D):u.style.removeProperty("font-weight")),w!==o.s&&((o.s=w)!=null?u.style.setProperty("color",w):u.style.removeProperty("color")),k!==o.h&&((o.h=k)!=null?u.style.setProperty("font-size",k):u.style.removeProperty("font-size")),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),a})()})}}),null),i})()}),(()=>{var n=Ae(),i=n.firstChild,d=i.nextSibling;return c(i,()=>e.totalLabel),c(d,()=>L(e.total)),H(h=>se(n,{...re,color:e.color},h)),n})()]}});return P(Ce,{get title(){return s("balanceSheet.title")},get children(){return[(()=>{var e=Le(),n=e.firstChild,i=n.firstChild,d=i.nextSibling,h=d.firstChild,g=n.nextSibling,r=g.firstChild,a=r.firstChild,l=r.nextSibling;return se(e,de),i.style.setProperty("margin","0"),c(i,()=>s("balanceSheet.title","Balance General")),d.style.setProperty("margin","0.5rem 0 0 0"),d.style.setProperty("color","var(--text-muted)"),c(d,()=>s("balanceSheet.asOf","A la fecha del"),h),c(d,()=>new Date(f()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),null),g.style.setProperty("display","flex"),g.style.setProperty("gap","1rem"),g.style.setProperty("align-items","center"),g.style.setProperty("flex-wrap","wrap"),r.style.setProperty("display","flex"),r.style.setProperty("align-items","center"),r.style.setProperty("gap","0.5rem"),r.style.setProperty("cursor","pointer"),a.addEventListener("change",b=>ue(b.target.checked)),c(r,()=>s("balanceSheet.showDetails","Mostrar detalles"),null),l.addEventListener("change",b=>t(b.target.value)),l.style.setProperty("padding","0.5rem"),l.style.setProperty("border","1px solid var(--border-color)"),l.style.setProperty("border-radius","var(--border-radius-sm)"),c(g,P(ie,{variant:"primary",onClick:O,get disabled(){return z()},get children(){return Z(()=>!!z())()?s("common.loading","Cargando..."):s("balanceSheet.generateReport","Generar Reporte")}}),null),H(()=>a.checked=S()),H(()=>l.value=f()),e})(),P(M,{get when(){return z()},get children(){var e=De(),n=e.firstChild;return e.style.setProperty("text-align","center"),e.style.setProperty("padding","3rem"),n.style.setProperty("width","40px"),n.style.setProperty("height","40px"),n.style.setProperty("border","3px solid var(--border-color)"),n.style.setProperty("border-top-color","var(--primary-color)"),n.style.setProperty("border-radius","50%"),n.style.setProperty("animation","spin 1s linear infinite"),n.style.setProperty("margin","0 auto 1rem"),c(e,()=>s("common.loading","Cargando..."),null),e}}),P(M,{get when(){return!z()},get children(){return[(()=>{var e=Ne(),n=e.firstChild,i=n.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","1fr 1fr"),e.style.setProperty("gap","2rem"),c(n,P(V,{get groups(){return N()},get title(){return s("balanceSheet.assets","Activos")},get totalLabel(){return s("balanceSheet.totalAssets","Total Activos")},get total(){return F()},color:"var(--primary-color)"})),c(i,P(V,{get groups(){return _()},get title(){return s("balanceSheet.liabilities","Pasivos")},get totalLabel(){return s("balanceSheet.totalLiabilities","Total Pasivos")},get total(){return v()},color:"#f44336"}),null),c(i,P(V,{get groups(){return G()},get title(){return s("balanceSheet.equity","Patrimonio")},get totalLabel(){return s("balanceSheet.totalEquity","Total Patrimonio")},get total(){return T()},color:"#4caf50"}),null),e})(),P(he,{get title(){return s("balanceSheet.summary","Resumen")},style:{"margin-top":"2rem"},get children(){return[(()=>{var e=Ie(),n=e.firstChild,i=n.firstChild,d=i.nextSibling,h=d.nextSibling,g=h.firstChild,r=n.nextSibling,a=r.firstChild,l=a.nextSibling,b=l.nextSibling,p=b.firstChild,u=r.nextSibling,o=u.firstChild,C=o.nextSibling,y=C.nextSibling,E=y.firstChild,m=u.nextSibling,$=m.firstChild,D=$.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","repeat(4, 1fr)"),e.style.setProperty("gap","2rem"),n.style.setProperty("text-align","center"),i.style.setProperty("font-size","0.875rem"),i.style.setProperty("color","var(--text-muted)"),i.style.setProperty("margin-bottom","0.5rem"),c(i,()=>s("balanceSheet.totalAssets","Total Activos")),d.style.setProperty("font-size","1.5rem"),d.style.setProperty("font-weight","bold"),d.style.setProperty("color","var(--primary-color)"),c(d,()=>L(F())),h.style.setProperty("font-size","0.75rem"),h.style.setProperty("color","var(--text-muted)"),c(h,()=>N().reduce((w,k)=>w+k.accounts.length,0),g),c(h,()=>s("balanceSheet.accounts","cuentas"),null),r.style.setProperty("text-align","center"),a.style.setProperty("font-size","0.875rem"),a.style.setProperty("color","var(--text-muted)"),a.style.setProperty("margin-bottom","0.5rem"),c(a,()=>s("balanceSheet.totalLiabilities","Total Pasivos")),l.style.setProperty("font-size","1.5rem"),l.style.setProperty("font-weight","bold"),l.style.setProperty("color","#f44336"),c(l,()=>L(v())),b.style.setProperty("font-size","0.75rem"),b.style.setProperty("color","var(--text-muted)"),c(b,()=>_().reduce((w,k)=>w+k.accounts.length,0),p),c(b,()=>s("balanceSheet.accounts","cuentas"),null),u.style.setProperty("text-align","center"),o.style.setProperty("font-size","0.875rem"),o.style.setProperty("color","var(--text-muted)"),o.style.setProperty("margin-bottom","0.5rem"),c(o,()=>s("balanceSheet.totalEquity","Total Patrimonio")),C.style.setProperty("font-size","1.5rem"),C.style.setProperty("font-weight","bold"),C.style.setProperty("color","#4caf50"),c(C,()=>L(T())),y.style.setProperty("font-size","0.75rem"),y.style.setProperty("color","var(--text-muted)"),c(y,()=>G().reduce((w,k)=>w+k.accounts.length,0),E),c(y,()=>s("balanceSheet.accounts","cuentas"),null),m.style.setProperty("text-align","center"),$.style.setProperty("font-size","0.875rem"),$.style.setProperty("color","var(--text-muted)"),$.style.setProperty("margin-bottom","0.5rem"),c($,()=>s("balanceSheet.liabilitiesPlusEquity","Pasivos + Patrimonio")),D.style.setProperty("font-size","1.5rem"),D.style.setProperty("font-weight","bold"),c(D,()=>L(v()+T())),H(w=>(w=I()?"#4caf50":"#f44336")!=null?D.style.setProperty("color",w):D.style.removeProperty("color")),e})(),(()=>{var e=qe(),n=e.firstChild,i=n.firstChild,d=i.firstChild,h=i.nextSibling,g=h.nextSibling,r=g.nextSibling,a=r.nextSibling;a.nextSibling;var l=n.nextSibling,b=l.firstChild;return e.style.setProperty("margin-top","2rem"),e.style.setProperty("padding","1rem"),e.style.setProperty("border-radius","var(--border-radius)"),e.style.setProperty("text-align","center"),n.style.setProperty("font-size","1rem"),n.style.setProperty("margin-bottom","0.5rem"),c(i,()=>s("balanceSheet.equation","Ecuación Contable"),d),c(n,()=>s("balanceSheet.assets","Activos"),g),c(n,()=>s("balanceSheet.liabilities","Pasivos"),a),c(n,()=>s("balanceSheet.equity","Patrimonio"),null),l.style.setProperty("font-size","1.2rem"),l.style.setProperty("font-weight","bold"),c(l,()=>L(F()),b),c(l,()=>L(v()+T()),null),c(l,P(M,{get when(){return I()},get children(){var p=ke();return p.style.setProperty("margin-left","0.5rem"),p}}),null),c(e,P(M,{get when(){return!I()},get children(){var p=Me(),u=p.firstChild;return p.style.setProperty("font-size","0.875rem"),p.style.setProperty("color","#d32f2f"),p.style.setProperty("margin-top","0.5rem"),c(p,()=>s("balanceSheet.difference","Diferencia"),u),c(p,()=>L(F()-(v()+T())),null),p}}),null),H(p=>{var u=I()?"#e8f5e9":"#ffebee",o=I()?"#388e3c":"#d32f2f";return u!==p.e&&((p.e=u)!=null?e.style.setProperty("background",u):e.style.removeProperty("background")),o!==p.t&&((p.t=o)!=null?l.style.setProperty("color",o):l.style.removeProperty("color")),p},{e:void 0,t:void 0}),e})()]}}),(()=>{var e=Be();return e.style.setProperty("display","flex"),e.style.setProperty("gap","1rem"),e.style.setProperty("justify-content","flex-end"),e.style.setProperty("margin-top","1.5rem"),c(e,P(ie,{variant:"outline",onClick:ee,get children(){return["🖨️ ",Z(()=>s("common.print","Imprimir"))]}}),null),c(e,P(ie,{variant:"secondary",onClick:ce,get children(){return["📊 ",Z(()=>s("balanceSheet.exportCSV","Exportar CSV"))]}}),null),c(e,P(ie,{variant:"primary",onClick:ye,get children(){return["📄 ",Z(()=>s("balanceSheet.exportPDF","Exportar PDF"))]}}),null),e})()]}}),(()=>{var e=Re(),n=e.firstChild,i=n.firstChild,d=i.nextSibling;return d.firstChild,i.style.setProperty("margin","0"),i.style.setProperty("font-size","1.5rem"),d.style.setProperty("margin","0.25rem 0 0 0"),d.style.setProperty("font-size","0.9rem"),d.style.setProperty("color","#666"),c(d,()=>new Date(f()).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"}),null),e})(),je()]}})};export{Ge as default};
