import{c as Ve,o as We,r as I,t as x,s as r,i,e as g,S as b,f as u,F as ee,aB as be,g as Ye}from"./index-Ct0M8o7_.js";var Ze=x("<div>"),Je=x("<div>Tel: "),Ke=x("<div>RIF: "),Qe=x("<div><span>Tienda:</span><span>"),Xe=x("<div><span>Cliente:</span><span>"),et=x("<div><span>Descuento:</span><span>-"),tt=x("<div><span>Cambio:</span><span>"),it=x("<button>➕ Nueva Venta"),st=x("<button>Cerrar"),nt=x("<div><div><div></div><div><div><div></div></div><div></div><div><div><span>RECIBO #:</span><span></span></div><div><span>Fecha:</span><span></span></div><div><span>Hora:</span><span></span></div><div><span>Cajero:</span><span></span></div></div><div></div><div></div><div></div><div><div><span>Subtotal:</span><span></span></div><div><span>Impuesto:</span><span></span></div></div><div><span>TOTAL:</span><span></span></div><div><div>FORMA DE PAGO</div><div><span>Total Pagado:</span><span></span></div></div><div></div><div>Artículos: <!> | Unidades: </div><div></div><div><div>¡GRACIAS POR SU COMPRA!</div><div>Conserve este recibo para cualquier<br>reclamación o devolución</div><div><div>||| || ||| | || ||| || |||</div><div></div></div><div>Generado por HRM Finance POS</div></div></div><div></div></div><div><button>"),lt=x("<div><span>Desc:</span><span>-"),he=x("<div><div></div><div><span> x </span><span>"),rt=x("<div><span>:</span><span>");const ot=s=>{const[R,q]=Ve(!1),te=()=>({name:I.state?.business?.name||"HRM Finance",address:I.state?.business?.address||"",phone:I.state?.business?.phone||"",email:I.state?.business?.email||"",taxId:I.state?.business?.taxId||""}),a=t=>`$${t.toFixed(2)}`,ie=t=>new Date(t).toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"}),se=t=>new Date(t).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),ne=()=>{const t=s.sale.paymentMethods,v=[],w={cash:"Efectivo",creditCard:"Tarjeta Crédito",debitCard:"Tarjeta Débito",zelle:"Zelle",bankTransfer:"Transferencia",check:"Cheque",giftCard:"Tarjeta Regalo",googlePay:"Google Pay",other:"Otro"};return Object.entries(t).forEach(([n,y])=>{typeof y=="number"&&y>0&&n!=="cashChange"&&v.push({method:w[n]||n,amount:y})}),v},ue=()=>{const t=s.sale,v=te(),w=ne();return`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Recibo - ${t.saleNumber}</title>
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
      <h1>${v.name}</h1>
      ${v.address?`<div class="small">${v.address}</div>`:""}
      ${v.phone?`<div class="small">Tel: ${v.phone}</div>`:""}
      ${v.taxId?`<div class="small">RIF: ${v.taxId}</div>`:""}
    </div>

    <div class="dashed-line"></div>

    <!-- Sale Info -->
    <div class="sale-info">
      <div class="row">
        <span>RECIBO #:</span>
        <span class="bold">${t.saleNumber}</span>
      </div>
      <div class="row">
        <span>Fecha:</span>
        <span>${ie(t.timestamp)}</span>
      </div>
      <div class="row">
        <span>Hora:</span>
        <span>${se(t.timestamp)}</span>
      </div>
      <div class="row">
        <span>Cajero:</span>
        <span>${t.cashier.name}</span>
      </div>
      ${t.storeName?`
      <div class="row">
        <span>Tienda:</span>
        <span>${t.storeName}</span>
      </div>
      `:""}
      ${t.customer?`
      <div class="row">
        <span>Cliente:</span>
        <span>${t.customer.name}</span>
      </div>
      `:""}
    </div>

    <div class="double-line"></div>

    <!-- Items -->
    <div class="items-section">
      ${t.products.map(n=>`
        <div class="item-row">
          <div class="item-name">${n.product.label}</div>
          <div class="item-details">
            <span>${n.qty} x ${a(n.unitPrice)}</span>
            <span>${a(n.total)}</span>
          </div>
          ${n.discount>0?`
          <div class="item-details small">
            <span>Desc:</span>
            <span>-${a(n.discount*n.qty)}</span>
          </div>
          `:""}
        </div>
      `).join("")}

      ${t.services.map(n=>`
        <div class="item-row">
          <div class="item-name">${n.name}</div>
          <div class="item-details">
            <span>${n.qty} x ${a(n.unitPrice)}</span>
            <span>${a(n.total)}</span>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="dashed-line"></div>

    <!-- Totals -->
    <div class="total-section">
      <div class="row">
        <span>Subtotal:</span>
        <span>${a(t.subtotal)}</span>
      </div>
      ${t.totalDiscount>0?`
      <div class="row">
        <span>Descuento:</span>
        <span>-${a(t.totalDiscount)}</span>
      </div>
      `:""}
      <div class="row">
        <span>Impuesto:</span>
        <span>${a(t.totalTax)}</span>
      </div>
    </div>

    <div class="grand-total row">
      <span>TOTAL:</span>
      <span>${a(t.total)}</span>
    </div>

    <!-- Payment -->
    <div class="payment-section">
      <div class="center bold">FORMA DE PAGO</div>
      ${w.map(n=>`
        <div class="row">
          <span>${n.method}:</span>
          <span>${a(n.amount)}</span>
        </div>
      `).join("")}
      <div class="row bold">
        <span>Total Pagado:</span>
        <span>${a(t.totalPaid)}</span>
      </div>
      ${t.change>0?`
      <div class="row bold">
        <span>Cambio:</span>
        <span>${a(t.change)}</span>
      </div>
      `:""}
    </div>

    <div class="dashed-line"></div>

    <!-- Items Count -->
    <div class="center small">
      Artículos: ${t.products.length+t.services.length} |
      Unidades: ${t.products.reduce((n,y)=>n+y.qty,0)+t.services.reduce((n,y)=>n+y.qty,0)}
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
        <div class="barcode-text">${t.saleNumber}</div>
      </div>

      <div class="small" style="margin-top: 10px; color: #666;">
        Generado por HRM Finance POS
      </div>
    </div>
  </div>
</body>
</html>
    `},le=()=>{q(!0);const t=window.open("","_blank","width=320,height=600");t?(t.document.write(ue()),t.document.close(),t.onload=()=>{setTimeout(()=>{t.print(),t.close(),q(!1),s.onPrint?.()},250)}):(q(!1),alert("Por favor permita las ventanas emergentes para imprimir"))};We(()=>{s.autoPrint&&setTimeout(le,500)});const fe=ne(),f=te(),$e={width:"320px",margin:"0 auto",background:"#fafafa","box-shadow":"0 4px 20px rgba(0,0,0,0.15)","font-family":"'Courier New', 'Lucida Console', monospace","font-size":"12px","line-height":"1.4",color:"#000",overflow:"hidden"},Pe={background:"white",padding:"20px 15px","border-left":"1px solid #ddd","border-right":"1px solid #ddd",position:"relative"},re={height:"15px",background:"repeating-linear-gradient(90deg, transparent, transparent 5px, #ddd 5px, #ddd 6px)","border-bottom":"1px dashed #ccc"},O={"border-top":"1px dashed #333",margin:"10px 0"},_e={"border-top":"3px double #333",margin:"12px 0"},c={display:"flex","justify-content":"space-between",margin:"3px 0"};return(()=>{var t=nt(),v=t.firstChild,w=v.firstChild,n=w.nextSibling,y=n.firstChild,D=y.firstChild,ae=y.nextSibling,S=ae.nextSibling,E=S.firstChild,we=E.firstChild,oe=we.nextSibling,L=E.nextSibling,Se=L.firstChild,Ce=Se.nextSibling,M=L.nextSibling,ze=M.firstChild,Te=ze.nextSibling,de=M.nextSibling,Ie=de.firstChild,Re=Ie.nextSibling,pe=S.nextSibling,N=pe.nextSibling,ce=N.nextSibling,A=ce.nextSibling,G=A.firstChild,Oe=G.firstChild,De=Oe.nextSibling,H=G.nextSibling,Ne=H.firstChild,Ae=Ne.nextSibling,B=A.nextSibling,Fe=B.firstChild,je=Fe.nextSibling,C=B.nextSibling,F=C.firstChild,U=F.nextSibling,ke=U.firstChild,qe=ke.nextSibling,ve=C.nextSibling,$=ve.nextSibling,Ee=$.firstChild,ye=Ee.nextSibling;ye.nextSibling;var me=$.nextSibling,V=me.nextSibling,W=V.firstChild,j=W.nextSibling,Y=j.nextSibling,z=Y.firstChild,ge=z.nextSibling,Z=Y.nextSibling,Le=n.nextSibling,P=v.nextSibling,d=P.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("align-items","center"),t.style.setProperty("gap","1.5rem"),t.style.setProperty("padding","1rem"),r(v,$e),y.style.setProperty("text-align","center"),y.style.setProperty("margin-bottom","15px"),D.style.setProperty("font-size","18px"),D.style.setProperty("font-weight","bold"),D.style.setProperty("margin-bottom","5px"),i(D,()=>f.name),i(y,g(b,{get when(){return f.address},get children(){var e=Ze();return e.style.setProperty("font-size","10px"),i(e,()=>f.address),e}}),null),i(y,g(b,{get when(){return f.phone},get children(){var e=Je();return e.firstChild,e.style.setProperty("font-size","10px"),i(e,()=>f.phone,null),e}}),null),i(y,g(b,{get when(){return f.taxId},get children(){var e=Ke();return e.firstChild,e.style.setProperty("font-size","10px"),i(e,()=>f.taxId,null),e}}),null),S.style.setProperty("margin-bottom","10px"),oe.style.setProperty("font-weight","bold"),i(oe,()=>s.sale.saleNumber),i(Ce,()=>ie(s.sale.timestamp)),i(Te,()=>se(s.sale.timestamp)),i(Re,()=>s.sale.cashier.name),i(S,g(b,{get when(){return s.sale.storeName},get children(){var e=Qe(),l=e.firstChild,o=l.nextSibling;return i(o,()=>s.sale.storeName),u(p=>r(e,c,p)),e}}),null),i(S,g(b,{get when(){return s.sale.customer},get children(){var e=Xe(),l=e.firstChild,o=l.nextSibling;return i(o,()=>s.sale.customer.name),u(p=>r(e,c,p)),e}}),null),r(pe,_e),N.style.setProperty("margin-bottom","10px"),i(N,g(ee,{get each(){return s.sale.products},children:e=>(()=>{var l=he(),o=l.firstChild,p=o.nextSibling,m=p.firstChild,_=m.firstChild,T=m.nextSibling;return l.style.setProperty("margin-bottom","8px"),o.style.setProperty("font-weight","bold"),o.style.setProperty("font-size","11px"),i(o,()=>e.product.label),i(m,()=>e.qty,_),i(m,()=>a(e.unitPrice),null),i(T,()=>a(e.total)),i(l,g(b,{get when(){return e.discount>0},get children(){var h=lt(),J=h.firstChild,k=J.nextSibling;return k.firstChild,i(k,()=>a(e.discount*e.qty),null),u(K=>r(h,{...c,"padding-left":"10px","font-size":"10px",color:"#666"},K)),h}}),null),u(h=>r(p,{...c,"padding-left":"10px","font-size":"11px"},h)),l})()}),null),i(N,g(ee,{get each(){return s.sale.services},children:e=>(()=>{var l=he(),o=l.firstChild,p=o.nextSibling,m=p.firstChild,_=m.firstChild,T=m.nextSibling;return l.style.setProperty("margin-bottom","8px"),o.style.setProperty("font-weight","bold"),o.style.setProperty("font-size","11px"),i(o,()=>e.name),i(m,()=>e.qty,_),i(m,()=>a(e.unitPrice),null),i(T,()=>a(e.total)),u(h=>r(p,{...c,"padding-left":"10px","font-size":"11px"},h)),l})()}),null),A.style.setProperty("margin-bottom","5px"),i(De,()=>a(s.sale.subtotal)),i(A,g(b,{get when(){return s.sale.totalDiscount>0},get children(){var e=et(),l=e.firstChild,o=l.nextSibling;return o.firstChild,i(o,()=>a(s.sale.totalDiscount),null),u(p=>r(e,c,p)),e}}),H),i(Ae,()=>a(s.sale.totalTax)),i(je,()=>a(s.sale.total)),C.style.setProperty("margin-bottom","10px"),F.style.setProperty("text-align","center"),F.style.setProperty("font-weight","bold"),F.style.setProperty("margin-bottom","5px"),i(C,g(ee,{each:fe,children:e=>(()=>{var l=rt(),o=l.firstChild,p=o.firstChild,m=o.nextSibling;return i(o,()=>e.method,p),i(m,()=>a(e.amount)),u(_=>r(l,c,_)),l})()}),U),i(qe,()=>a(s.sale.totalPaid)),i(C,g(b,{get when(){return s.sale.change>0},get children(){var e=tt(),l=e.firstChild,o=l.nextSibling;return i(o,()=>a(s.sale.change)),u(p=>r(e,{...c,"font-weight":"bold",color:"#2e7d32"},p)),e}}),null),$.style.setProperty("text-align","center"),$.style.setProperty("font-size","10px"),$.style.setProperty("color","#666"),i($,()=>s.sale.products.length+s.sale.services.length,ye),i($,()=>s.sale.products.reduce((e,l)=>e+l.qty,0)+s.sale.services.reduce((e,l)=>e+l.qty,0),null),V.style.setProperty("text-align","center"),V.style.setProperty("margin-top","15px"),W.style.setProperty("font-weight","bold"),W.style.setProperty("font-size","14px"),j.style.setProperty("font-size","10px"),j.style.setProperty("margin-top","5px"),j.style.setProperty("color","#666"),Y.style.setProperty("margin-top","12px"),z.style.setProperty("font-family","monospace"),z.style.setProperty("font-size","10px"),z.style.setProperty("letter-spacing","3px"),z.style.setProperty("margin-bottom","3px"),ge.style.setProperty("font-size","9px"),i(ge,()=>s.sale.saleNumber),Z.style.setProperty("font-size","9px"),Z.style.setProperty("margin-top","10px"),Z.style.setProperty("color","#999"),P.style.setProperty("display","flex"),P.style.setProperty("gap","1rem"),P.style.setProperty("flex-wrap","wrap"),P.style.setProperty("justify-content","center"),d.$$click=le,d.style.setProperty("padding","12px 24px"),d.style.setProperty("color","white"),d.style.setProperty("border","none"),d.style.setProperty("border-radius","8px"),d.style.setProperty("font-weight","600"),d.style.setProperty("font-size","1rem"),d.style.setProperty("display","flex"),d.style.setProperty("align-items","center"),d.style.setProperty("gap","8px"),d.style.setProperty("box-shadow","0 2px 8px rgba(0,0,0,0.15)"),i(d,()=>R()?"⏳ Imprimiendo...":"🖨️ Imprimir Recibo"),i(P,g(b,{get when(){return s.onNewSale},get children(){var e=it();return be(e,"click",s.onNewSale,!0),e.style.setProperty("padding","12px 24px"),e.style.setProperty("background","var(--success-color)"),e.style.setProperty("color","white"),e.style.setProperty("border","none"),e.style.setProperty("border-radius","8px"),e.style.setProperty("cursor","pointer"),e.style.setProperty("font-weight","600"),e.style.setProperty("font-size","1rem"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("gap","8px"),e.style.setProperty("box-shadow","0 2px 8px rgba(0,0,0,0.15)"),e}}),null),i(P,g(b,{get when(){return s.onClose},get children(){var e=st();return be(e,"click",s.onClose,!0),e.style.setProperty("padding","12px 24px"),e.style.setProperty("background","var(--surface-color)"),e.style.setProperty("color","var(--text-primary)"),e.style.setProperty("border","1px solid var(--border-color)"),e.style.setProperty("border-radius","8px"),e.style.setProperty("cursor","pointer"),e.style.setProperty("font-weight","500"),e.style.setProperty("font-size","1rem"),e}}),null),u(e=>{var l=re,o=Pe,p=O,m=c,_=c,T=c,h=c,J=O,k=c,K=c,Me={...c,"font-size":"18px","font-weight":"bold",padding:"8px 0","border-top":"2px solid #000","border-bottom":"2px solid #000",margin:"10px 0"},Ge={...c,"font-weight":"bold"},He=O,Be=O,Ue={...re,"border-bottom":"none","border-top":"1px dashed #ccc"},xe=R(),Q=R()?"#ccc":"var(--primary-color)",X=R()?"not-allowed":"pointer";return e.e=r(w,l,e.e),e.t=r(n,o,e.t),e.a=r(ae,p,e.a),e.o=r(E,m,e.o),e.i=r(L,_,e.i),e.n=r(M,T,e.n),e.s=r(de,h,e.s),e.h=r(ce,J,e.h),e.r=r(G,k,e.r),e.d=r(H,K,e.d),e.l=r(B,Me,e.l),e.u=r(U,Ge,e.u),e.c=r(ve,He,e.c),e.w=r(me,Be,e.w),e.m=r(Le,Ue,e.m),xe!==e.f&&(d.disabled=e.f=xe),Q!==e.y&&((e.y=Q)!=null?d.style.setProperty("background",Q):d.style.removeProperty("background")),X!==e.g&&((e.g=X)!=null?d.style.setProperty("cursor",X):d.style.removeProperty("cursor")),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),t})()};Ye(["click"]);export{ot as T};
