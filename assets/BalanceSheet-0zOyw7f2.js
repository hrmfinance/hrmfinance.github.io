import{E as Pe,u as xe,c as le,o as Se,h as Ce,j as X,k as be,l as se,m as R,e as P,t as A,s as ie,i,n as ae,B as ce,q as W,f as U,S as k,C as fe,r as $e,F as ve,v as x,L as Ee}from"./index-DksXEhGS.js";const Ae=(b,s)=>{const t=new Pe({orientation:"portrait",unit:"mm",format:"letter"}),D=t.internal.pageSize.getWidth(),j=t.internal.pageSize.getHeight(),$=15,de=j-25,V=D-$*2,O=(V-10)/2,J=[25,118,210],pe=[245,245,245],Q=[25,118,210],Z=[244,67,54],Y=[76,175,80],G=[33,33,33],q=[117,117,117],_=p=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(p||0),H=p=>(t.setFontSize(8),t.setTextColor(...q),t.text(`${s("balanceSheet.title","Balance General")} - ${b.reportDate}`,$,p),p+8),L=(p,m)=>p+m>de?(t.addPage(),H($)):p;let h=$;t.setFontSize(20),t.setTextColor(...J),t.setFont("helvetica","bold"),t.text(b.companyName||"BALANCE GENERAL",D/2,h,{align:"center"}),h+=8,t.setFontSize(14),t.setTextColor(...G),t.text(s("balanceSheet.title","Balance General"),D/2,h,{align:"center"}),h+=6,t.setFontSize(10),t.setTextColor(...q),t.setFont("helvetica","normal"),t.text(`${s("balanceSheet.asOf","Al")} ${b.reportDate}`,D/2,h,{align:"center"}),h+=4,t.setDrawColor(...J),t.setLineWidth(.5),t.line($,h,D-$,h),h+=10;const T=h,w=(p,m,o,a,l,d,y,f)=>{let r=f;return r=L(r,30),t.setFillColor(...l),t.rect(d,r,y,8,"F"),t.setFontSize(11),t.setTextColor(255,255,255),t.setFont("helvetica","bold"),t.text(m,d+3,r+5.5),r+=12,p.forEach(S=>{r=L(r,25),t.setFillColor(...pe),t.rect(d,r,y,6,"F"),t.setFontSize(9),t.setTextColor(...G),t.setFont("helvetica","bold"),t.text(S.category,d+2,r+4),t.text(_(S.total),d+y-2,r+4,{align:"right"}),r+=8,S.accounts.forEach(C=>{r=L(r,8);const v=C.level||0,g=C.subAccounts&&C.subAccounts.length>0,F=v*4;v===0&&g?(t.setFontSize(8.5),t.setFont("helvetica","bold")):v>0?(t.setFontSize(6.5),t.setFont("helvetica","normal")):(t.setFontSize(8),t.setFont("helvetica","normal")),v>0&&(t.setTextColor(180,180,180),t.text("•",d+2+F-3.5,r+3)),t.setTextColor(...v>0?[150,150,150]:q);const N=C.accountNumber||C.code||"";t.text(N,d+2+F,r+3),t.setTextColor(...v>0?[100,100,100]:G);let E=C.name;const I=y-50-F;for(;t.getTextWidth(E)>I&&E.length>3;)E=E.slice(0,-4)+"...";t.text(E,d+18+F,r+3),t.setFont("helvetica",v===0&&g?"bold":"normal"),t.setTextColor(...v>0?[100,100,100]:G),t.text(_(C.balance||0),d+y-2,r+3,{align:"right"}),t.setDrawColor(...v>0?[240,240,240]:[230,230,230]),t.setLineWidth(.1),t.line(d+F,r+5,d+y,r+5),r+=6}),r+=2}),r=L(r,15),t.setDrawColor(...l),t.setLineWidth(.5),t.line(d,r,d+y,r),r+=1,t.line(d,r,d+y,r),r+=5,t.setFontSize(10),t.setFont("helvetica","bold"),t.setTextColor(...l),t.text(o,d+2,r),t.text(_(a),d+y-2,r,{align:"right"}),r+=8,r},B=$,ee=$+O+10,ue=w(b.assetGroups,s("balanceSheet.assets","ACTIVOS"),s("balanceSheet.totalAssets","Total Activos"),b.totalAssets,Q,B,O,T),me=w(b.liabilityGroups,s("balanceSheet.liabilities","PASIVOS"),s("balanceSheet.totalLiabilities","Total Pasivos"),b.totalLiabilities,Z,ee,O,T),z=w(b.equityGroups,s("balanceSheet.equity","PATRIMONIO"),s("balanceSheet.totalEquity","Total Patrimonio"),b.totalEquity,Y,ee,O,me+5);h=Math.max(ue,z)+10,h=L(h,60),t.setFillColor(250,250,250),t.setDrawColor(200,200,200),t.roundedRect($,h,V,40,3,3,"FD"),t.setFontSize(11),t.setFont("helvetica","bold"),t.setTextColor(...G),t.text(s("balanceSheet.summary","RESUMEN"),$+5,h+7);const M=h+14,te=$+5,re=$+V/4,oe=$+V/2,ne=$+V*3/4;t.setFontSize(8),t.setFont("helvetica","normal"),t.setTextColor(...q),t.text(s("balanceSheet.totalAssets","Total Activos"),te,M),t.text(s("balanceSheet.totalLiabilities","Total Pasivos"),re,M),t.text(s("balanceSheet.totalEquity","Total Patrimonio"),oe,M),t.text(s("balanceSheet.liabilitiesPlusEquity","Pasivo + Patrimonio"),ne,M),t.setFontSize(12),t.setFont("helvetica","bold"),t.setTextColor(...Q),t.text(_(b.totalAssets),te,M+7),t.setTextColor(...Z),t.text(_(b.totalLiabilities),re,M+7),t.setTextColor(...Y),t.text(_(b.totalEquity),oe,M+7),t.setTextColor(...b.isBalanced?Y:Z),t.text(_(b.totalLiabilities+b.totalEquity),ne,M+7);const K=b.isBalanced,he=b.totalAssets-(b.totalLiabilities+b.totalEquity);t.setFontSize(9),t.setFont("helvetica","bold"),`${s("balanceSheet.assets","Activos")}${s("balanceSheet.liabilities","Pasivos")}${s("balanceSheet.equity","Patrimonio")}`,`${_(b.totalAssets)}${_(b.totalLiabilities+b.totalEquity)}`,K||`${s("balanceSheet.difference","Diferencia")}${_(he)}`;const e=j-15,n=new Date().toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),c=t.getNumberOfPages();for(let p=1;p<=c;p++)t.setPage(p),t.setDrawColor(200,200,200),t.setLineWidth(.3),t.line($,e-5,D-$,e-5),t.setFontSize(7),t.setFont("helvetica","normal"),t.setTextColor(...q),t.text(`${s("common.generatedOn","Generado el")}: ${n}`,$,e),t.text("HRM Finance",D-$,e,{align:"right"}),t.text(`${s("common.page","Página")} ${p} ${s("common.of","de")} ${c}`,D/2,e,{align:"center"});const u=`balance_general_${b.reportDate.replace(/[^0-9-]/g,"")}.pdf`;t.save(u)};var _e=A("<div>"),we=A("<div><span></span><span>"),Fe=A("<div><div><span></span><span>"),ge=A("<span>"),Te=A("<span> tx"),ze=A("<span> sub"),Le=A("<div><span><span></span><span></span></span><span>"),Ne=A("<div><div><h1></h1><p> </p></div><div><label><input type=checkbox></label><input type=date>"),Ie=A("<div><div>"),ke=A("<div><div></div><div>"),De=A("<div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div></div><div> </div></div><div><div></div><div>"),Me=A("<span>✓"),qe=A("<div>: "),Be=A("<div><div><strong>:</strong> <!> = <!> + </div><div> = "),Re=A("<div class=no-print>"),je=A('<div class="print-only print-header"><div class=company-header><h1>BALANCE GENERAL</h1><p>Al '),Oe=A(`<style>
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
      `);const He=b=>{const{t:s}=xe(),[t,D]=le(new Date().toISOString().split("T")[0]),[j,$]=le(!1),[ye,de]=le(!0),[V,O]=le(!1);Se(async()=>{await J()});const J=async()=>{$(!0);try{let e=await Ce.getBalances();X.updAccountBalance(e);try{await be.fetchJournalEntries({status:"all",dateTo:t()})}catch{}try{(!se.entities||se.entities.length===0)&&await se.loadEntities()}catch{}}catch(e){console.error("Error loading accounts:",e)}finally{$(!1)}},pe=()=>{let e=0,n=0;return X?.accountsBalances?.accountMap&&Object.values(X.accountsBalances?.accountMap).forEach(c=>{let u=c?.accountType;!c.parentAccountId&&(u==="Revenue"?e+=c?.balance||0:u==="Expense"&&(n+=c?.balance||0))}),e-n},Q=R(()=>{const e=new Map;for(const n of se.entities||[])n.id&&e.set(n.id,{name:n.name,type:n.type,taxId:n.taxId});return e}),Z=R(()=>{const e=new Map,n=be.journalEntries||[],c=Q();for(const p of n)for(const m of p.lines||[]){const o=m,a=o.accountId;if(!a)continue;const l=o.customerId||o.providerId||o.entityId||o.referenceId;if(!l)continue;const d=c.get(l),y=d?.name||o.entityName||o.customerName||o.providerName||"",f=d?.type||(o.customerId?"customer":o.providerId?"provider":o.entityType)||void 0,r=d?.taxId||o.taxId||void 0,S=Number(o.debitAmount)||0,C=Number(o.creditAmount)||0;let v=e.get(a);v||(v=new Map,e.set(a,v));const g=v.get(l)||{entityId:l,entityName:y,entityType:f,taxId:r,debit:0,credit:0,balance:0,transactionCount:0};g.debit+=S,g.credit+=C,g.balance=g.debit-g.credit,g.transactionCount+=1,!g.entityName&&y&&(g.entityName=y),!g.entityType&&f&&(g.entityType=f),!g.taxId&&r&&(g.taxId=r),v.set(l,g)}const u=new Map;for(const[p,m]of e){const o=Array.from(m.values()).filter(a=>Math.abs(a.balance)>.001).sort((a,l)=>Math.abs(l.balance)-Math.abs(a.balance));o.length>0&&u.set(p,o)}return u}),Y=(e,n,c=0)=>{const u=n.filter(m=>e===null?!m.parentAccountId:m.parentAccountId===e),p=Z();return u.map(m=>{const o=Y(m.id,n,c+1);let a=[];o.length===0&&(a=(p.get(m.id)||[]).map(y=>({id:`${m.id}::${y.entityId}`,accountNumber:"—",name:y.entityName||y.entityId,accountType:m.accountType,category:m.category,description:"",balance:y.balance,isActive:!0,parentAccountId:m.id,createdDate:"",lastModified:"",level:c+1,isEntitySubAccount:!0,entityId:y.entityId,entityType:y.entityType,entityTaxId:y.taxId,transactionCount:y.transactionCount})));const l=[...o,...a];return{...m,level:c,subAccounts:l.length>0?l:void 0}}).sort((m,o)=>(m.accountNumber||"").localeCompare(o.accountNumber||""))},G=e=>{const n=[],c=u=>{n.push(u),u.subAccounts&&u.subAccounts.forEach(p=>c(p))};return e.forEach(u=>c(u)),n},q=e=>{const n=new Map,c=[];X?.accountsBalances?.accountMap&&Object.values(X.accountsBalances?.accountMap).forEach(o=>{const a=o?.accountType,l=X?.accountsBalances?.accountMapIDs?.[o?.id]?.transactionCount,d=o?.year===$e.getSelectedYear();a===e&&l&&d&&c.push(o)});const u=Y(null,c,0),p=e||s("common.uncategorized","Sin categorizar");if(n.has(p)||n.set(p,[]),u.forEach(o=>{n.get(p).push(o)}),e==="Equity"){const a={id:"profit-loss",accountNumber:"Resultado",name:"(ganancia o pérdida)",balance:pe(),level:0,accountType:"Equity",isActive:!0};n.get(p)&&n.get(p).push(a)}return Array.from(n.entries()).map(([o,a])=>{const l=G(a),d=a.reduce((y,f)=>y+(f.balance||0),0);return{category:o,accounts:l,total:d}})},_=R(()=>q("Asset")),H=R(()=>q("Liability")),L=R(()=>q("Equity")),h=R(()=>_().reduce((e,n)=>e+n.total,0)),T=R(()=>H().reduce((e,n)=>e+n.total,0)),w=R(()=>L().reduce((e,n)=>e+n.total,0)),B=R(()=>Math.abs(h()-(T()+w()))<.01),ee=()=>{const e=[],n=ae(t());e.push(x(["BALANCE GENERAL"])),e.push(x([`Fecha: ${n}`])),e.push(x([])),e.push(x(["Tipo","Categoría","Nivel","Código","Cuenta","Saldo"]));const c=(a,l)=>l===0?a:"  ".repeat(l)+"└ "+a;_().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.assets"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",c(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalAssets"),"","","",h().toFixed(2)])),e.push(x([])),H().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.liabilities"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",c(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalLiabilities"),"","","",T().toFixed(2)])),e.push(x([])),L().forEach(a=>{a.accounts.forEach(l=>{e.push(x([s("balanceSheet.equity"),a.category,(l.level||0).toString(),l.accountNumber||l.code||"",c(l.name,l.level||0),(l.balance||0).toFixed(2)]))}),e.push(x(["",`Subtotal ${a.category}`,"","","",a.total.toFixed(2)]))}),e.push(x(["",s("balanceSheet.totalEquity"),"","","",w().toFixed(2)])),e.push(x([])),e.push(x(["RESUMEN"])),e.push(x([s("balanceSheet.totalAssets"),"","","","",h().toFixed(2)])),e.push(x([s("balanceSheet.totalLiabilities"),"","","","",T().toFixed(2)])),e.push(x([s("balanceSheet.totalEquity"),"","","","",w().toFixed(2)])),e.push(x([s("balanceSheet.liabilitiesPlusEquity"),"","","","",(T()+w()).toFixed(2)])),e.push(x(["Diferencia","","","","",(h()-(T()+w())).toFixed(2)])),e.push(x(["Balance Cuadrado","","","","",B()?"Sí":"No"]));const u=e.join(`
`),p=new Blob(["\uFEFF"+u],{type:"text/csv;charset=utf-8;"}),m=URL.createObjectURL(p),o=document.createElement("a");o.href=m,o.download=`balance_general_${t()}.csv`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(m)},ue=()=>{O(!0),setTimeout(()=>{window.print(),O(!1)},100)},me=()=>{const e=ae(t());Ae({companyName:"HRM Finance",reportDate:e,assetGroups:_(),liabilityGroups:H(),equityGroups:L(),totalAssets:h(),totalLiabilities:T(),totalEquity:w(),isBalanced:B()},s)},z=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e||0),M={display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"2rem","flex-wrap":"wrap",gap:"1rem"},te={"margin-bottom":"1.5rem"},re={display:"flex","justify-content":"space-between","align-items":"center",padding:"0.75rem",background:"var(--gray-100)","border-radius":"var(--border-radius-sm)","font-weight":"600","margin-bottom":"0.5rem"},oe={display:"flex","justify-content":"space-between","font-weight":"bold","font-size":"1.1rem","border-top":"2px solid var(--border-color)","padding-top":"0.75rem","margin-top":"1rem"},ne=(e,n)=>({display:"flex","justify-content":"space-between","align-items":"center",padding:`0.5rem 0.75rem 0.5rem ${.75+e*1.25}rem`,"border-bottom":e===0?"1px solid var(--border-color)":"1px solid var(--gray-100)","font-size":e===0?"0.9rem":"0.85rem","background-color":e===0&&n?"var(--gray-50)":"transparent","font-weight":e===0&&n?"600":"400"}),K=e=>P(fe,{get title(){return e.title},style:te,get children(){return[P(k,{get when(){return e.groups.length===0},get children(){var n=_e();return n.style.setProperty("text-align","center"),n.style.setProperty("padding","1rem"),n.style.setProperty("color","var(--text-muted)"),i(n,()=>s("balanceSheet.noAccounts","No hay cuentas registradas")),n}}),P(ve,{get each(){return e.groups},children:n=>(()=>{var c=Fe(),u=c.firstChild,p=u.firstChild,m=p.nextSibling;return c.style.setProperty("margin-bottom","1rem"),ie(u,re),i(p,()=>n.category),i(m,()=>z(n.total)),i(c,P(k,{get when(){return ye()},get children(){return P(ve,{get each(){return n.accounts},children:o=>(()=>{var a=Le(),l=a.firstChild,d=l.firstChild,y=d.nextSibling,f=l.nextSibling;return l.style.setProperty("display","flex"),l.style.setProperty("align-items","center"),l.style.setProperty("gap","0.5rem"),i(l,P(k,{get when(){return(o.level||0)>0},get children(){var r=ge();return r.style.setProperty("font-size","0.7rem"),r.style.setProperty("margin-right","0.25rem"),i(r,()=>o.isEntitySubAccount?"•":"└"),U(S=>(S=o.isEntitySubAccount?"#512da8":"var(--gray-400)")!=null?r.style.setProperty("color",S):r.style.removeProperty("color")),r}}),d),d.style.setProperty("min-width","60px"),i(d,()=>o.isEntitySubAccount?"":o.accountNumber||o.code),i(y,()=>o.name),i(l,P(k,{get when(){return o.isEntitySubAccount},get children(){return[W(()=>(()=>{const r=o.entityType,S=r==="customer"?"CLIENTE":r==="provider"?"PROVEEDOR":r==="both"?"CLIENTE / PROVEEDOR":"ENTIDAD",C=r==="customer"?"#e8f5e9":r==="provider"?"#e3f2fd":r==="both"?"#fff3e0":"#ede7f6",v=r==="customer"?"#2e7d32":r==="provider"?"#1565c0":r==="both"?"#e65100":"#512da8";return(()=>{var g=ge();return g.style.setProperty("font-size","0.65rem"),v!=null?g.style.setProperty("color",v):g.style.removeProperty("color"),C!=null?g.style.setProperty("background",C):g.style.removeProperty("background"),g.style.setProperty("padding","0.05rem 0.4rem"),g.style.setProperty("border-radius","999px"),g.style.setProperty("font-weight","600"),g.style.setProperty("letter-spacing","0.3px"),i(g,S),g})()})()),P(k,{get when(){return o.entityTaxId},get children(){var r=ge();return r.style.setProperty("font-size","0.65rem"),r.style.setProperty("color","var(--text-muted)"),r.style.setProperty("font-family","monospace"),i(r,()=>o.entityTaxId),r}}),P(k,{get when(){return o.transactionCount},get children(){var r=Te(),S=r.firstChild;return r.style.setProperty("font-size","0.65rem"),r.style.setProperty("color","var(--text-muted)"),i(r,()=>o.transactionCount,S),r}})]}}),null),i(l,P(k,{get when(){return o.subAccounts&&o.subAccounts.length>0&&!o.isEntitySubAccount},get children(){var r=ze(),S=r.firstChild;return r.style.setProperty("font-size","0.7rem"),r.style.setProperty("color","#fff"),r.style.setProperty("background","var(--primary-light, #e3f2fd)"),r.style.setProperty("padding","0.1rem 0.4rem"),r.style.setProperty("border-radius","10px"),i(r,()=>o.subAccounts.length,S),r}}),null),i(f,()=>z(o.balance||0)),U(r=>{var S=ne(o.level||0,!!o.subAccounts),C=(o.level||0)===0?"var(--text-muted)":"var(--gray-400)",v=(o.level||0)===0?"0.8rem":"0.75rem",g=(o.level||0)===0?"inherit":o.isEntitySubAccount?"#512da8":"var(--text-muted)",F=o.isEntitySubAccount?"italic":"normal",N=(o.level||0)===0?"600":"400",E=(o.level||0)===0?"inherit":"var(--text-muted)",I=(o.level||0)===0?"0.9rem":"0.85rem";return r.e=ie(a,S,r.e),C!==r.t&&((r.t=C)!=null?d.style.setProperty("color",C):d.style.removeProperty("color")),v!==r.a&&((r.a=v)!=null?d.style.setProperty("font-size",v):d.style.removeProperty("font-size")),g!==r.o&&((r.o=g)!=null?y.style.setProperty("color",g):y.style.removeProperty("color")),F!==r.i&&((r.i=F)!=null?y.style.setProperty("font-style",F):y.style.removeProperty("font-style")),N!==r.n&&((r.n=N)!=null?f.style.setProperty("font-weight",N):f.style.removeProperty("font-weight")),E!==r.s&&((r.s=E)!=null?f.style.setProperty("color",E):f.style.removeProperty("color")),I!==r.h&&((r.h=I)!=null?f.style.setProperty("font-size",I):f.style.removeProperty("font-size")),r},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),a})()})}}),null),c})()}),(()=>{var n=we(),c=n.firstChild,u=c.nextSibling;return i(c,()=>e.totalLabel),i(u,()=>z(e.total)),U(p=>ie(n,{...oe,color:e.color},p)),n})()]}});return P(e=>b.embedded?W(()=>e.children):P(Ee,{get title(){return s("balanceSheet.title")},get children(){return e.children}}),{get children(){return[(()=>{var e=Ne(),n=e.firstChild,c=n.firstChild,u=c.nextSibling,p=u.firstChild,m=n.nextSibling,o=m.firstChild,a=o.firstChild,l=o.nextSibling;return ie(e,M),c.style.setProperty("margin","0"),i(c,()=>s("balanceSheet.title","Balance General")),u.style.setProperty("margin","0.5rem 0 0 0"),u.style.setProperty("color","var(--text-muted)"),i(u,()=>s("balanceSheet.asOf","A la fecha del"),p),i(u,()=>ae(t()),null),m.style.setProperty("display","flex"),m.style.setProperty("gap","1rem"),m.style.setProperty("align-items","center"),m.style.setProperty("flex-wrap","wrap"),o.style.setProperty("display","flex"),o.style.setProperty("align-items","center"),o.style.setProperty("gap","0.5rem"),o.style.setProperty("cursor","pointer"),a.addEventListener("change",d=>de(d.target.checked)),i(o,()=>s("balanceSheet.showDetails","Mostrar detalles"),null),l.addEventListener("change",d=>D(d.target.value)),l.style.setProperty("padding","0.5rem"),l.style.setProperty("border","1px solid var(--border-color)"),l.style.setProperty("border-radius","var(--border-radius-sm)"),i(m,P(ce,{variant:"primary",onClick:J,get disabled(){return j()},get children(){return W(()=>!!j())()?s("common.loading","Cargando..."):s("balanceSheet.generateReport","Generar Reporte")}}),null),U(()=>a.checked=ye()),U(()=>l.value=t()),e})(),P(k,{get when(){return j()},get children(){var e=Ie(),n=e.firstChild;return e.style.setProperty("text-align","center"),e.style.setProperty("padding","3rem"),n.style.setProperty("width","40px"),n.style.setProperty("height","40px"),n.style.setProperty("border","3px solid var(--border-color)"),n.style.setProperty("border-top-color","var(--primary-color)"),n.style.setProperty("border-radius","50%"),n.style.setProperty("animation","spin 1s linear infinite"),n.style.setProperty("margin","0 auto 1rem"),i(e,()=>s("common.loading","Cargando..."),null),e}}),P(k,{get when(){return!j()},get children(){return[(()=>{var e=ke(),n=e.firstChild,c=n.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","1fr 1fr"),e.style.setProperty("gap","2rem"),i(n,P(K,{get groups(){return _()},get title(){return s("balanceSheet.assets","Activos")},get totalLabel(){return s("balanceSheet.totalAssets","Total Activos")},get total(){return h()},color:"var(--primary-color)"})),i(c,P(K,{get groups(){return H()},get title(){return s("balanceSheet.liabilities","Pasivos")},get totalLabel(){return s("balanceSheet.totalLiabilities","Total Pasivos")},get total(){return T()},color:"#f44336"}),null),i(c,P(K,{get groups(){return L()},get title(){return s("balanceSheet.equity","Patrimonio")},get totalLabel(){return s("balanceSheet.totalEquity","Total Patrimonio")},get total(){return w()},color:"#4caf50"}),null),e})(),P(fe,{get title(){return s("balanceSheet.summary","Resumen")},style:{"margin-top":"2rem"},get children(){return[(()=>{var e=De(),n=e.firstChild,c=n.firstChild,u=c.nextSibling,p=u.nextSibling,m=p.firstChild,o=n.nextSibling,a=o.firstChild,l=a.nextSibling,d=l.nextSibling,y=d.firstChild,f=o.nextSibling,r=f.firstChild,S=r.nextSibling,C=S.nextSibling,v=C.firstChild,g=f.nextSibling,F=g.firstChild,N=F.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","repeat(4, 1fr)"),e.style.setProperty("gap","2rem"),n.style.setProperty("text-align","center"),c.style.setProperty("font-size","0.875rem"),c.style.setProperty("color","var(--text-muted)"),c.style.setProperty("margin-bottom","0.5rem"),i(c,()=>s("balanceSheet.totalAssets","Total Activos")),u.style.setProperty("font-size","1.5rem"),u.style.setProperty("font-weight","bold"),u.style.setProperty("color","var(--primary-color)"),i(u,()=>z(h())),p.style.setProperty("font-size","0.75rem"),p.style.setProperty("color","var(--text-muted)"),i(p,()=>_().reduce((E,I)=>E+I.accounts.length,0),m),i(p,()=>s("balanceSheet.accounts","cuentas"),null),o.style.setProperty("text-align","center"),a.style.setProperty("font-size","0.875rem"),a.style.setProperty("color","var(--text-muted)"),a.style.setProperty("margin-bottom","0.5rem"),i(a,()=>s("balanceSheet.totalLiabilities","Total Pasivos")),l.style.setProperty("font-size","1.5rem"),l.style.setProperty("font-weight","bold"),l.style.setProperty("color","#f44336"),i(l,()=>z(T())),d.style.setProperty("font-size","0.75rem"),d.style.setProperty("color","var(--text-muted)"),i(d,()=>H().reduce((E,I)=>E+I.accounts.length,0),y),i(d,()=>s("balanceSheet.accounts","cuentas"),null),f.style.setProperty("text-align","center"),r.style.setProperty("font-size","0.875rem"),r.style.setProperty("color","var(--text-muted)"),r.style.setProperty("margin-bottom","0.5rem"),i(r,()=>s("balanceSheet.totalEquity","Total Patrimonio")),S.style.setProperty("font-size","1.5rem"),S.style.setProperty("font-weight","bold"),S.style.setProperty("color","#4caf50"),i(S,()=>z(w())),C.style.setProperty("font-size","0.75rem"),C.style.setProperty("color","var(--text-muted)"),i(C,()=>L().reduce((E,I)=>E+I.accounts.length,0),v),i(C,()=>s("balanceSheet.accounts","cuentas"),null),g.style.setProperty("text-align","center"),F.style.setProperty("font-size","0.875rem"),F.style.setProperty("color","var(--text-muted)"),F.style.setProperty("margin-bottom","0.5rem"),i(F,()=>s("balanceSheet.liabilitiesPlusEquity","Pasivos + Patrimonio")),N.style.setProperty("font-size","1.5rem"),N.style.setProperty("font-weight","bold"),i(N,()=>z(T()+w())),U(E=>(E=B()?"#4caf50":"#f44336")!=null?N.style.setProperty("color",E):N.style.removeProperty("color")),e})(),(()=>{var e=Be(),n=e.firstChild,c=n.firstChild,u=c.firstChild,p=c.nextSibling,m=p.nextSibling,o=m.nextSibling,a=o.nextSibling;a.nextSibling;var l=n.nextSibling,d=l.firstChild;return e.style.setProperty("margin-top","2rem"),e.style.setProperty("padding","1rem"),e.style.setProperty("border-radius","var(--border-radius)"),e.style.setProperty("text-align","center"),n.style.setProperty("font-size","1rem"),n.style.setProperty("margin-bottom","0.5rem"),i(c,()=>s("balanceSheet.equation","Ecuación Contable"),u),i(n,()=>s("balanceSheet.assets","Activos"),m),i(n,()=>s("balanceSheet.liabilities","Pasivos"),a),i(n,()=>s("balanceSheet.equity","Patrimonio"),null),l.style.setProperty("font-size","1.2rem"),l.style.setProperty("font-weight","bold"),i(l,()=>z(h()),d),i(l,()=>z(T()+w()),null),i(l,P(k,{get when(){return B()},get children(){var y=Me();return y.style.setProperty("margin-left","0.5rem"),y}}),null),i(e,P(k,{get when(){return!B()},get children(){var y=qe(),f=y.firstChild;return y.style.setProperty("font-size","0.875rem"),y.style.setProperty("color","#d32f2f"),y.style.setProperty("margin-top","0.5rem"),i(y,()=>s("balanceSheet.difference","Diferencia"),f),i(y,()=>z(h()-(T()+w())),null),y}}),null),U(y=>{var f=B()?"#e8f5e9":"#ffebee",r=B()?"#388e3c":"#d32f2f";return f!==y.e&&((y.e=f)!=null?e.style.setProperty("background",f):e.style.removeProperty("background")),r!==y.t&&((y.t=r)!=null?l.style.setProperty("color",r):l.style.removeProperty("color")),y},{e:void 0,t:void 0}),e})()]}}),(()=>{var e=Re();return e.style.setProperty("display","flex"),e.style.setProperty("gap","1rem"),e.style.setProperty("justify-content","flex-end"),e.style.setProperty("margin-top","1.5rem"),i(e,P(ce,{variant:"outline",onClick:ue,get children(){return["🖨️ ",W(()=>s("common.print","Imprimir"))]}}),null),i(e,P(ce,{variant:"secondary",onClick:ee,get children(){return["📊 ",W(()=>s("balanceSheet.exportCSV","Exportar CSV"))]}}),null),i(e,P(ce,{variant:"primary",onClick:me,get children(){return["📄 ",W(()=>s("balanceSheet.exportPDF","Exportar PDF"))]}}),null),e})()]}}),(()=>{var e=je(),n=e.firstChild,c=n.firstChild,u=c.nextSibling;return u.firstChild,c.style.setProperty("margin","0"),c.style.setProperty("font-size","1.5rem"),u.style.setProperty("margin","0.25rem 0 0 0"),u.style.setProperty("font-size","0.9rem"),u.style.setProperty("color","#666"),i(u,()=>ae(t()),null),e})(),Oe()]}})};export{He as default};
