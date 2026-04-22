import{c as G,o as Ue,J as de,t as h,s as a,i as t,e as y,S as P,f as T,F as be,v as X,l as He,u as Xe,m as Ee,G as je,n as et,k as tt}from"./index-abD36OyA.js";var rt=h("<div>"),it=h("<div>Tel: "),nt=h("<div>RIF: "),st=h("<div><span>Tienda:</span><span>"),at=h("<div><span>Cliente:</span><span>"),lt=h("<div><span>Descuento:</span><span>-"),ot=h("<div><span>Cambio:</span><span>"),dt=h("<button>➕ Nueva Venta"),ct=h("<button>Cerrar"),pt=h("<div><div><div></div><div><div><div></div></div><div></div><div><div><span>RECIBO #:</span><span></span></div><div><span>Fecha:</span><span></span></div><div><span>Hora:</span><span></span></div><div><span>Cajero:</span><span></span></div></div><div></div><div></div><div></div><div><div><span>Subtotal:</span><span></span></div><div><span>Impuesto:</span><span></span></div></div><div><span>TOTAL:</span><span></span></div><div><div>FORMA DE PAGO</div><div><span>Total Pagado:</span><span></span></div></div><div></div><div>Artículos: <!> | Unidades: </div><div></div><div><div>¡GRACIAS POR SU COMPRA!</div><div>Conserve este recibo para cualquier<br>reclamación o devolución</div><div><div>||| || ||| | || ||| || |||</div><div></div></div><div>Generado por HRM Finance POS</div></div></div><div></div></div><div><button>"),mt=h("<div><span>Desc:</span><span>-"),qe=h("<div><div></div><div><span> x </span><span>"),ut=h("<div><span>:</span><span>");const St=r=>{const[O,B]=G(!1),z=()=>({name:de.state?.business?.name||"HRM Finance",address:de.state?.business?.address||"",phone:de.state?.business?.phone||"",email:de.state?.business?.email||"",taxId:de.state?.business?.taxId||""}),s=i=>`$${i.toFixed(2)}`,k=i=>new Date(i).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"}),w=i=>new Date(i).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),_=()=>{const i=r.sale.paymentMethods,g=[],U={cash:"Efectivo",creditCard:"Tarjeta Crédito",debitCard:"Tarjeta Débito",zelle:"Zelle",bankTransfer:"Transferencia",check:"Cheque",giftCard:"Tarjeta Regalo",googlePay:"Google Pay",other:"Otro"};return Object.entries(i).forEach(([d,D])=>{typeof D=="number"&&D>0&&d!=="cashChange"&&g.push({method:U[d]||d,amount:D})}),g},ee=()=>{const i=r.sale,g=z(),U=_();return`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Recibo - ${i.saleNumber}</title>
  <style>
    @page {
      size: 80mm auto;
      margin: 0;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Courier New', 'Lucida Console', monospace;
      font-size: 12px;
      line-height: 1.3;
      width: 80mm;
      padding: 5mm;
      background: white;
      color: #000;
    }
    .receipt {
      width: 100%;
    }
    .center {
      text-align: center;
    }
    .right {
      text-align: right;
    }
    .bold {
      font-weight: bold;
    }
    .large {
      font-size: 16px;
    }
    .small {
      font-size: 10px;
    }
    .dashed-line {
      border-top: 1px dashed #000;
      margin: 8px 0;
    }
    .double-line {
      border-top: 3px double #000;
      margin: 8px 0;
    }
    .header {
      margin-bottom: 10px;
    }
    .header h1 {
      font-size: 18px;
      margin-bottom: 3px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: 2px 0;
    }
    .item-row {
      margin: 4px 0;
    }
    .item-name {
      font-weight: bold;
    }
    .item-details {
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      font-size: 11px;
    }
    .total-section .row {
      margin: 4px 0;
    }
    .grand-total {
      font-size: 18px;
      font-weight: bold;
      margin: 8px 0;
      padding: 5px 0;
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
    }
    .payment-section {
      margin: 10px 0;
    }
    .footer {
      margin-top: 15px;
      text-align: center;
    }
    .barcode {
      margin: 10px auto;
      text-align: center;
      font-family: 'Libre Barcode 39', cursive;
      font-size: 40px;
      letter-spacing: -2px;
    }
    .barcode-text {
      font-size: 10px;
      margin-top: 3px;
    }
    @media print {
      body {
        width: 80mm;
        min-height: auto;
      }
    }
  </style>
</head>
<body>
  <div class="receipt">
    <!-- Header -->
    <div class="header center">
      <h1>${g.name}</h1>
      ${g.address?`<div class="small">${g.address}</div>`:""}
      ${g.phone?`<div class="small">Tel: ${g.phone}</div>`:""}
      ${g.taxId?`<div class="small">RIF: ${g.taxId}</div>`:""}
    </div>

    <div class="dashed-line"></div>

    <!-- Sale Info -->
    <div class="sale-info">
      <div class="row">
        <span>RECIBO #:</span>
        <span class="bold">${i.saleNumber}</span>
      </div>
      <div class="row">
        <span>Fecha:</span>
        <span>${k(i.timestamp)}</span>
      </div>
      <div class="row">
        <span>Hora:</span>
        <span>${w(i.timestamp)}</span>
      </div>
      <div class="row">
        <span>Cajero:</span>
        <span>${i.cashier.name}</span>
      </div>
      ${i.storeName?`
      <div class="row">
        <span>Tienda:</span>
        <span>${i.storeName}</span>
      </div>
      `:""}
      ${i.customer?`
      <div class="row">
        <span>Cliente:</span>
        <span>${i.customer.name}</span>
      </div>
      `:""}
    </div>

    <div class="double-line"></div>

    <!-- Items -->
    <div class="items-section">
      ${i.products.map(d=>`
        <div class="item-row">
          <div class="item-name">${d.product.label}</div>
          <div class="item-details">
            <span>${d.qty} x ${s(d.unitPrice)}</span>
            <span>${s(d.total)}</span>
          </div>
          ${d.discount>0?`
          <div class="item-details small">
            <span>Desc:</span>
            <span>-${s(d.discount*d.qty)}</span>
          </div>
          `:""}
        </div>
      `).join("")}

      ${i.services.map(d=>`
        <div class="item-row">
          <div class="item-name">${d.name}</div>
          <div class="item-details">
            <span>${d.qty} x ${s(d.unitPrice)}</span>
            <span>${s(d.total)}</span>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="dashed-line"></div>

    <!-- Totals -->
    <div class="total-section">
      <div class="row">
        <span>Subtotal:</span>
        <span>${s(i.subtotal)}</span>
      </div>
      ${i.totalDiscount>0?`
      <div class="row">
        <span>Descuento:</span>
        <span>-${s(i.totalDiscount)}</span>
      </div>
      `:""}
      <div class="row">
        <span>Impuesto:</span>
        <span>${s(i.totalTax)}</span>
      </div>
    </div>

    <div class="grand-total row">
      <span>TOTAL:</span>
      <span>${s(i.total)}</span>
    </div>

    <!-- Payment -->
    <div class="payment-section">
      <div class="center bold">FORMA DE PAGO</div>
      ${U.map(d=>`
        <div class="row">
          <span>${d.method}:</span>
          <span>${s(d.amount)}</span>
        </div>
      `).join("")}
      <div class="row bold">
        <span>Total Pagado:</span>
        <span>${s(i.totalPaid)}</span>
      </div>
      ${i.change>0?`
      <div class="row bold">
        <span>Cambio:</span>
        <span>${s(i.change)}</span>
      </div>
      `:""}
    </div>

    <div class="dashed-line"></div>

    <!-- Items Count -->
    <div class="center small">
      Artículos: ${i.products.length+i.services.length} |
      Unidades: ${i.products.reduce((d,D)=>d+D.qty,0)+i.services.reduce((d,D)=>d+D.qty,0)}
    </div>

    <div class="dashed-line"></div>

    <!-- Footer -->
    <div class="footer">
      <div class="bold">¡GRACIAS POR SU COMPRA!</div>
      <div class="small" style="margin-top: 5px;">
        Conserve este recibo para cualquier<br>
        reclamación o devolución
      </div>

      <!-- Barcode representation -->
      <div style="margin-top: 10px;">
        <div style="font-family: monospace; font-size: 10px; letter-spacing: 2px;">
          ||| || ||| | || ||| || |||
        </div>
        <div class="barcode-text">${i.saleNumber}</div>
      </div>

      <div class="small" style="margin-top: 10px; color: #666;">
        Generado por HRM Finance POS
      </div>
    </div>
  </div>
</body>
</html>
    `},te=()=>{B(!0);const i=window.open("","_blank","width=320,height=600");i?(i.document.write(ee()),i.document.close(),i.onload=()=>{setTimeout(()=>{i.print(),i.close(),B(!1),r.onPrint?.()},250)}):(B(!1),alert("Por favor permita las ventanas emergentes para imprimir"))};Ue(()=>{r.autoPrint&&setTimeout(te,500)});const re=_(),I=z(),x={width:"320px",margin:"0 auto",background:"#fafafa","box-shadow":"0 4px 20px rgba(0,0,0,0.15)","font-family":"'Courier New', 'Lucida Console', monospace","font-size":"12px","line-height":"1.4",color:"#000",overflow:"hidden"},L={background:"white",padding:"20px 15px","border-left":"1px solid #ddd","border-right":"1px solid #ddd",position:"relative"},$={height:"15px",background:"repeating-linear-gradient(90deg, transparent, transparent 5px, #ddd 5px, #ddd 6px)","border-bottom":"1px dashed #ccc"},W={"border-top":"1px dashed #333",margin:"10px 0"},ce={"border-top":"3px double #333",margin:"12px 0"},b={display:"flex","justify-content":"space-between",margin:"3px 0"};return(()=>{var i=pt(),g=i.firstChild,U=g.firstChild,d=U.nextSibling,D=d.firstChild,V=D.firstChild,pe=D.nextSibling,M=pe.nextSibling,ie=M.firstChild,fe=ie.firstChild,me=fe.nextSibling,ne=ie.nextSibling,xe=ne.firstChild,$e=xe.nextSibling,se=ne.nextSibling,Pe=se.firstChild,De=Pe.nextSibling,ue=se.nextSibling,Se=ue.firstChild,Ce=Se.nextSibling,ve=M.nextSibling,Q=ve.nextSibling,ye=Q.nextSibling,Y=ye.nextSibling,ae=Y.firstChild,we=ae.firstChild,o=we.nextSibling,l=ae.nextSibling,c=l.firstChild,f=c.nextSibling,n=Y.nextSibling,u=n.firstChild,v=u.nextSibling,A=n.nextSibling,R=A.firstChild,F=R.nextSibling,j=F.firstChild,Z=j.nextSibling,E=A.nextSibling,H=E.nextSibling,Je=H.firstChild,Be=Je.nextSibling;Be.nextSibling;var Le=H.nextSibling,_e=Le.nextSibling,Ae=_e.firstChild,ge=Ae.nextSibling,ze=ge.nextSibling,le=ze.firstChild,Me=le.nextSibling,Ie=ze.nextSibling,Ke=d.nextSibling,J=g.nextSibling,S=J.firstChild;return i.style.setProperty("display","flex"),i.style.setProperty("flex-direction","column"),i.style.setProperty("align-items","center"),i.style.setProperty("gap","1.5rem"),i.style.setProperty("padding","1rem"),a(g,x),D.style.setProperty("text-align","center"),D.style.setProperty("margin-bottom","15px"),V.style.setProperty("font-size","18px"),V.style.setProperty("font-weight","bold"),V.style.setProperty("margin-bottom","5px"),t(V,()=>I.name),t(D,y(P,{get when(){return I.address},get children(){var e=rt();return e.style.setProperty("font-size","10px"),t(e,()=>I.address),e}}),null),t(D,y(P,{get when(){return I.phone},get children(){var e=it();return e.firstChild,e.style.setProperty("font-size","10px"),t(e,()=>I.phone,null),e}}),null),t(D,y(P,{get when(){return I.taxId},get children(){var e=nt();return e.firstChild,e.style.setProperty("font-size","10px"),t(e,()=>I.taxId,null),e}}),null),M.style.setProperty("margin-bottom","10px"),me.style.setProperty("font-weight","bold"),t(me,()=>r.sale.saleNumber),t($e,()=>k(r.sale.timestamp)),t(De,()=>w(r.sale.timestamp)),t(Ce,()=>r.sale.cashier.name),t(M,y(P,{get when(){return r.sale.storeName},get children(){var e=st(),p=e.firstChild,m=p.nextSibling;return t(m,()=>r.sale.storeName),T(C=>a(e,b,C)),e}}),null),t(M,y(P,{get when(){return r.sale.customer},get children(){var e=at(),p=e.firstChild,m=p.nextSibling;return t(m,()=>r.sale.customer.name),T(C=>a(e,b,C)),e}}),null),a(ve,ce),Q.style.setProperty("margin-bottom","10px"),t(Q,y(be,{get each(){return r.sale.products},children:e=>(()=>{var p=qe(),m=p.firstChild,C=m.nextSibling,N=C.firstChild,K=N.firstChild,oe=N.nextSibling;return p.style.setProperty("margin-bottom","8px"),m.style.setProperty("font-weight","bold"),m.style.setProperty("font-size","11px"),t(m,()=>e.product.label),t(N,()=>e.qty,K),t(N,()=>s(e.unitPrice),null),t(oe,()=>s(e.total)),t(p,y(P,{get when(){return e.discount>0},get children(){var q=mt(),Ne=q.firstChild,he=Ne.nextSibling;return he.firstChild,t(he,()=>s(e.discount*e.qty),null),T(Te=>a(q,{...b,"padding-left":"10px","font-size":"10px",color:"#666"},Te)),q}}),null),T(q=>a(C,{...b,"padding-left":"10px","font-size":"11px"},q)),p})()}),null),t(Q,y(be,{get each(){return r.sale.services},children:e=>(()=>{var p=qe(),m=p.firstChild,C=m.nextSibling,N=C.firstChild,K=N.firstChild,oe=N.nextSibling;return p.style.setProperty("margin-bottom","8px"),m.style.setProperty("font-weight","bold"),m.style.setProperty("font-size","11px"),t(m,()=>e.name),t(N,()=>e.qty,K),t(N,()=>s(e.unitPrice),null),t(oe,()=>s(e.total)),T(q=>a(C,{...b,"padding-left":"10px","font-size":"11px"},q)),p})()}),null),Y.style.setProperty("margin-bottom","5px"),t(o,()=>s(r.sale.subtotal)),t(Y,y(P,{get when(){return r.sale.totalDiscount>0},get children(){var e=lt(),p=e.firstChild,m=p.nextSibling;return m.firstChild,t(m,()=>s(r.sale.totalDiscount),null),T(C=>a(e,b,C)),e}}),l),t(f,()=>s(r.sale.totalTax)),t(v,()=>s(r.sale.total)),A.style.setProperty("margin-bottom","10px"),R.style.setProperty("text-align","center"),R.style.setProperty("font-weight","bold"),R.style.setProperty("margin-bottom","5px"),t(A,y(be,{each:re,children:e=>(()=>{var p=ut(),m=p.firstChild,C=m.firstChild,N=m.nextSibling;return t(m,()=>e.method,C),t(N,()=>s(e.amount)),T(K=>a(p,b,K)),p})()}),F),t(Z,()=>s(r.sale.totalPaid)),t(A,y(P,{get when(){return r.sale.change>0},get children(){var e=ot(),p=e.firstChild,m=p.nextSibling;return t(m,()=>s(r.sale.change)),T(C=>a(e,{...b,"font-weight":"bold",color:"#2e7d32"},C)),e}}),null),H.style.setProperty("text-align","center"),H.style.setProperty("font-size","10px"),H.style.setProperty("color","#666"),t(H,()=>r.sale.products.length+r.sale.services.length,Be),t(H,()=>r.sale.products.reduce((e,p)=>e+p.qty,0)+r.sale.services.reduce((e,p)=>e+p.qty,0),null),_e.style.setProperty("text-align","center"),_e.style.setProperty("margin-top","15px"),Ae.style.setProperty("font-weight","bold"),Ae.style.setProperty("font-size","14px"),ge.style.setProperty("font-size","10px"),ge.style.setProperty("margin-top","5px"),ge.style.setProperty("color","#666"),ze.style.setProperty("margin-top","12px"),le.style.setProperty("font-family","monospace"),le.style.setProperty("font-size","10px"),le.style.setProperty("letter-spacing","3px"),le.style.setProperty("margin-bottom","3px"),Me.style.setProperty("font-size","9px"),t(Me,()=>r.sale.saleNumber),Ie.style.setProperty("font-size","9px"),Ie.style.setProperty("margin-top","10px"),Ie.style.setProperty("color","#999"),J.style.setProperty("display","flex"),J.style.setProperty("gap","1rem"),J.style.setProperty("flex-wrap","wrap"),J.style.setProperty("justify-content","center"),S.$$click=te,S.style.setProperty("padding","12px 24px"),S.style.setProperty("color","white"),S.style.setProperty("border","none"),S.style.setProperty("border-radius","8px"),S.style.setProperty("font-weight","600"),S.style.setProperty("font-size","1rem"),S.style.setProperty("display","flex"),S.style.setProperty("align-items","center"),S.style.setProperty("gap","8px"),S.style.setProperty("box-shadow","0 2px 8px rgba(0,0,0,0.15)"),t(S,()=>O()?"⏳ Imprimiendo...":"🖨️ Imprimir Recibo"),t(J,y(P,{get when(){return r.onNewSale},get children(){var e=dt();return X(e,"click",r.onNewSale,!0),e.style.setProperty("padding","12px 24px"),e.style.setProperty("background","var(--success-color)"),e.style.setProperty("color","white"),e.style.setProperty("border","none"),e.style.setProperty("border-radius","8px"),e.style.setProperty("cursor","pointer"),e.style.setProperty("font-weight","600"),e.style.setProperty("font-size","1rem"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("gap","8px"),e.style.setProperty("box-shadow","0 2px 8px rgba(0,0,0,0.15)"),e}}),null),t(J,y(P,{get when(){return r.onClose},get children(){var e=ct();return X(e,"click",r.onClose,!0),e.style.setProperty("padding","12px 24px"),e.style.setProperty("background","var(--surface-color)"),e.style.setProperty("color","var(--text-primary)"),e.style.setProperty("border","1px solid var(--border-color)"),e.style.setProperty("border-radius","8px"),e.style.setProperty("cursor","pointer"),e.style.setProperty("font-weight","500"),e.style.setProperty("font-size","1rem"),e}}),null),T(e=>{var p=$,m=L,C=W,N=b,K=b,oe=b,q=b,Ne=W,he=b,Te=b,We={...b,"font-size":"18px","font-weight":"bold",padding:"8px 0","border-top":"2px solid #000","border-bottom":"2px solid #000",margin:"10px 0"},Ve={...b,"font-weight":"bold"},Qe=W,Ye=W,Ze={...$,"border-bottom":"none","border-top":"1px dashed #ccc"},Fe=O(),ke=O()?"#ccc":"var(--primary-color)",Oe=O()?"not-allowed":"pointer";return e.e=a(U,p,e.e),e.t=a(d,m,e.t),e.a=a(pe,C,e.a),e.o=a(ie,N,e.o),e.i=a(ne,K,e.i),e.n=a(se,oe,e.n),e.s=a(ue,q,e.s),e.h=a(ye,Ne,e.h),e.r=a(ae,he,e.r),e.d=a(l,Te,e.d),e.l=a(n,We,e.l),e.u=a(F,Ve,e.u),e.c=a(E,Qe,e.c),e.w=a(Le,Ye,e.w),e.m=a(Ke,Ze,e.m),Fe!==e.f&&(S.disabled=e.f=Fe),ke!==e.y&&((e.y=ke)!=null?S.style.setProperty("background",ke):S.style.removeProperty("background")),Oe!==e.g&&((e.g=Oe)!=null?S.style.setProperty("cursor",Oe):S.style.removeProperty("cursor")),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),i})()};He(["click"]);var vt=h("<label>"),Re=h("<div>"),yt=h("<button type=button>✕ Limpiar"),gt=h("<div><span>📱</span><span>Modo Escáner Activado: Escanee código de barras del ID del remitente"),ht=h("<div><span>🔄</span><span>"),bt=h("<div><div><input type=text autocomplete=off><button type=button>"),ft=h("<span>📞 "),xt=h("<div><div><div><div>👤 </div><div>");const Ct=r=>{const{t:O}=Xe(),[B,z]=G(!1),[s,k]=G(""),[w,_]=G(-1),[ee,te]=G(!1),[re,I]=G([]),[x,L]=G(null),[$,W]=G(!1),[ce,b]=G(""),i=600,g=async o=>{if(!o.trim()||o.trim().length<6){I([]);return}try{te(!0);const l=await et.getShipper(o),c=Object.values(l).map(f=>({id:f.shipperId,name:f.name,dob:f.dob,phoneNumberS:f.phoneNumber,idS:f.cid,street:f.street}));I(c)}catch(l){tt("API search failed, falling back to local search:",l)}finally{te(!1)}},U=o=>{const c=o.target.value;if(b(c),c.length>=11){x()&&clearTimeout(x());const f=setTimeout(()=>{g(c),z(!0),_(-1)},300);L(f)}else c.length===0&&(I([]),z(!1))},d=()=>{W(!$()),b(""),k(""),z(!1),I([]),x()&&(clearTimeout(x()),L(null))},D=()=>{b(""),z(!1),I([]),x()&&(clearTimeout(x()),L(null))},V=o=>{const c=o.target.value;k(c),z(!0),_(-1),x()&&clearTimeout(x());const f=setTimeout(()=>{g(c)},i);L(f)},pe=()=>{z(!0),k(""),_(-1),s()||g("")},M=o=>{r.onChange(o),z(!1),k(""),_(-1),x()&&(clearTimeout(x()),L(null))},ie=o=>{const l=re();switch(o.key){case"ArrowDown":o.preventDefault(),_(c=>Math.min(c+1,l.length-1));break;case"ArrowUp":o.preventDefault(),_(c=>Math.max(c-1,-1));break;case"Enter":o.preventDefault(),w()>=0&&l[w()]&&M(l[w()]),$()&&ne();break;case"Escape":z(!1),k(""),_(-1),x()&&(clearTimeout(x()),L(null));break}},fe=o=>{setTimeout(()=>{z(!1),k(""),_(-1),x()&&(clearTimeout(x()),L(null))},150)},me=()=>$()?ce()||"":B()&&s()?s():r.value?r.value.name:"";Ue(()=>(g(""),()=>{x()&&clearTimeout(x())}));const ne=()=>{let o=s(),l=Pt(o);if(l?.firstName){let c=l.dob.slice(4,8),f=l.dob.slice(0,2),n=l.dob.slice(2,4),u=`${c}-${f}-${n}`;const v={id:l?.dlNumber?.trim(),name:`${l.firstName} ${l.lastName} `,dob:u,phoneNumberS:"",idS:l.dlNumber?.trim(),addressS:`${l.address}, ${l.city}, ${l.state} ${l.zipCode}`};M(v)}},xe={position:"relative",width:"100%",...r.style},$e={display:"block","font-size":"0.875rem","font-weight":"500",color:"var(--text-secondary)","margin-bottom":"0.25rem"},se={"font-size":"0.75rem",color:"var(--text-muted)","margin-bottom":"0.5rem","font-style":"italic"},Pe={width:"100%",padding:"0.75rem",border:"1px solid var(--border-color)","border-radius":"var(--border-radius-sm)","font-size":"1rem",background:"var(--surface-color)",cursor:r.disabled?"not-allowed":"text",opacity:r.disabled?"0.6":"1"},De={position:"absolute",top:"100%",left:"0",right:"0","z-index":"1000","max-height":"300px","overflow-y":"auto",background:"var(--surface-color)",border:"1px solid var(--border-color)","border-radius":"var(--border-radius-sm)","box-shadow":"0 4px 12px rgba(0,0,0,0.15)","margin-top":"2px"},ue=o=>({padding:"0.75rem",cursor:"pointer","border-bottom":"1px solid var(--border-color)",background:o?"var(--strip-color)":"transparent",color:o?"var(--primary-color)":"var(--text-primary)",transition:"all 0.2s ease"}),Se={display:"flex","justify-content":"space-between","align-items":"flex-start"},Ce={flex:"1"},ve={"font-weight":"500","margin-bottom":"0.25rem"},Q={"font-size":"0.875rem",color:"var(--text-muted)",display:"flex","flex-direction":"column",gap:"0.125rem"},ye={padding:"1rem","text-align":"center",color:"var(--text-muted)","font-style":"italic"},Y={padding:"1rem","text-align":"center",color:"var(--text-muted)",display:"flex","align-items":"center","justify-content":"center",gap:"0.5rem"},ae={position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",background:$()?"var(--primary-color)":"var(--border-color)",color:$()?"white":"var(--text-muted)",border:"none","border-radius":"4px",padding:"6px 8px",cursor:"pointer","font-size":"12px","z-index":"10",transition:"all 0.2s ease"},we={position:"relative",width:"100%"};return(()=>{var o=bt(),l=o.firstChild,c=l.firstChild,f=c.nextSibling;return t(o,y(P,{get when(){return r.label},get children(){var n=vt();return a(n,$e),t(n,()=>r.label),n}}),l),t(o,y(P,{get when(){return r.description},get children(){var n=Re();return a(n,se),t(n,()=>r.description),n}}),l),t(o,y(P,{get when(){return $()},get children(){var n=gt(),u=n.firstChild;return u.nextSibling,n.style.setProperty("margin-bottom","0.5rem"),n.style.setProperty("padding","0.5rem"),n.style.setProperty("background-color","var(--primary-color)"),n.style.setProperty("color","white"),n.style.setProperty("border-radius","4px"),n.style.setProperty("font-size","0.875rem"),n.style.setProperty("display","flex"),n.style.setProperty("align-items","center"),n.style.setProperty("gap","0.5rem"),t(n,y(P,{get when(){return ce().length>0},get children(){var v=yt();return v.$$click=D,v.style.setProperty("background","rgba(255,255,255,0.2)"),v.style.setProperty("border","none"),v.style.setProperty("color","white"),v.style.setProperty("border-radius","2px"),v.style.setProperty("padding","2px 6px"),v.style.setProperty("cursor","pointer"),v.style.setProperty("font-size","0.75rem"),v}}),null),n}}),l),X(c,"blur",$()?handleLopValue:fe),X(c,"keydown",$()?void 0:ie,!0),X(c,"click",$()?void 0:pe,!0),X(c,"input",$()?U:V,!0),f.$$click=d,t(f,()=>$()?"📱 Scanner":"🔍 Manual"),t(o,y(P,{get when(){return B()},get children(){var n=Re();return t(n,y(P,{get when(){return ee()},get children(){var u=ht(),v=u.firstChild,A=v.nextSibling;return a(u,Y),t(A,()=>O("common.searching","Buscando clientes...")),u}}),null),t(n,y(P,{get when(){return Ee(()=>!ee())()&&re().length>0},get fallback(){return Ee(()=>!ee())()&&(()=>{var u=Re();return a(u,ye),t(u,(()=>{var v=Ee(()=>!!s());return()=>v()?O("customer.noShippersFound","No se encontraron clientes. Puede crear un nuevo cliente llenando el formulario."):O("customer.noShippersAvailable","No se encontraron clientes previos. Se creará un nuevo cliente.")})()),u})()},get children(){return y(be,{get each(){return re()},children:(u,v)=>(()=>{var A=xt(),R=A.firstChild,F=R.firstChild,j=F.firstChild;j.firstChild;var Z=j.nextSibling;return A.addEventListener("mouseenter",()=>_(v())),A.$$click=()=>M(u),a(R,Se),a(F,Ce),a(j,ve),t(j,()=>u.name,null),a(Z,Q),t(Z,y(P,{get when(){return u.phoneNumberS},get children(){var E=ft();return E.firstChild,t(E,()=>u.phoneNumberS,null),E}})),T(E=>a(A,ue(v()===w()),E)),A})()})}}),null),T(u=>a(n,De,u)),n}}),null),T(n=>{var u=xe,v=we,A={...Pe,"padding-right":"80px","border-color":$()?"var(--primary-color)":"var(--border-color)","box-shadow":$()?"0 0 0 3px rgba(108, 92, 231, 0.1)":"none"},R=$()?"Escanee código de barras del ID del remitente o escriba cédula (11 dígitos)...":r.placeholder||O("customer.searchPlaceholder","Buscar clientes por nombre, teléfono, ID..."),F=r.disabled,j=r.required,Z=ae,E=$()?"Cambiar a búsqueda manual":"Activar modo escáner";return n.e=a(o,u,n.e),n.t=a(l,v,n.t),n.a=a(c,A,n.a),R!==n.o&&je(c,"placeholder",n.o=R),F!==n.i&&(c.disabled=n.i=F),j!==n.n&&(c.required=n.n=j),n.s=a(f,Z,n.s),E!==n.h&&je(f,"title",n.h=E),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),T(()=>c.value=me()),o})()},Ge={DBA:"expirationDate",DCS:"lastName",DAC:"firstName",DAD:"middleName",DBD:"issueDate",DBB:"dob",DBC:"gender",DAY:"eyesColor",DAU:"height",DAG:"address",DAI:"city",DAJ:"state",DAK:"zipCode",DAQ:"dlNumber",DCF:"documentDiscriminator",DCG:"issueCountry",DAZ:"hairColor",DCI:"placeOfBirth"},$t={DDE:"Indicator that the last name is truncated",DDF:"Indicator that the first name is truncated",DCD:"Additional privileges granted to the cardholder (e.g., transportation of hazardous material",DDG:"Indicator that the middle name(s) are truncated",DDA:"Compliance Type",DDB:"Card Revision Date",DCA:"Jurisdiction-specific vehicle class",DBA:"Expiry Date",DCS:"lastName",DAC:"firstName",DBD:"issueDate",DBB:"birthDate",DBC:"gender",DAY:"eyeColor",DAU:"height",DAG:"street",DAI:"city",DAJ:"state",DAK:"zipCode",DAQ:"licenseNumber",DCF:"Document Discriminator",DCG:"issueCountry",DAH:"Street 2",DAZ:"hairColor",DCI:"placeOfBirth",DCJ:"Audit information",DCK:"Inventory Control Number",DBN:"Alias / AKA Family Name",DBG:"Alias / AKA Given Name",DBS:"Alias / AKA Suffix Name",DCU:"Name Suffix",DCE:"Physical Description Weight Range",DCL:"Race / Ethnicity",DCM:"Standard vehicle classification",DCN:"Standard endorsement code",DCO:"Standard restriction code",DCP:"Jurisdiction-specific vehicle classification description",DCQ:"Jurisdiction-specific endorsement code description",DCR:"Jurisdiction-specific restriction code description",DDC:"HazMat Endorsement Expiration Date",DDD:"Limited Duration Document Indicator",DAW:"Weight(pounds)",DAX:"Weight(kilograms)",DDH:"Under 18 Until",DDI:"Under 19 Until",DDJ:"Under 21 Until",DDK:"Organ Donor Indicator",DDL:"Veteran Indicator",DAD:"middleName"},Pt=r=>{let O=Object.keys($t),B={};return O.forEach((s,k)=>{if(r.indexOf(s)>=0){let w=r.split(s);w.length===2&&(r=w.join("*!*!*"+s))}}),r.split("*!*!*").forEach((s,k)=>{let w,_;k===1?(w="DAQ",_=s.substring(s.indexOf(w)+3)):(w=s.substring(0,3),_=s.substring(3).trim()),Object.keys(Ge).includes(w)&&(B[Ge[w]]=_)}),B};He(["click","input","keydown"]);export{Ct as S,St as T};
