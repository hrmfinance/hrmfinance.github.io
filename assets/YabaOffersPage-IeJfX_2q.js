import{d as je,c as S,f as tt,g as $e,o as rt,aA as ne,aB as lt,t as f,i as t,a as l,S as y,v as ae,F as R,b as z,h as j,B as W,r as Y,j as it,aC as st,L as nt}from"./index-KRdAjQWA.js";je(["click","input","keydown","mousedown"]);var at=f("<div><div>⏳</div><div>Cargando ofertas..."),ot=f("<div><p>Configuración actual: <strong></strong></p><p>Código: <!> •<!> •"),dt=f("<div><div><h2>💰 Administrador de Ofertas</h2></div><div>"),_e=f("<div>"),ct=f("<span>✓ ACTIVA EN SISTEMA"),pt=f("<div>💡 La configuración activa se usa automáticamente en las facturas"),gt=f("<div><div><label>🔄 Cambiar Configuración:</label></div><select>"),yt=f("<div><div><label>Método de Envío:</label><select><option value=maritime>🚢 Marítimo</option><option value=air>✈️ Aéreo</option></select></div><div><label>Categoría:</label><select><option value=miscellaneous>📦 Misceláneas</option><option value=durable>🔧 Duraderos</option><option value=box_flat_rate>📐 Tarifa Plana (Cajas)"),ut=f("<th>Libras Gratis"),mt=f("<th>Peso a Cobrar"),ft=f("<th>Arancel/lb"),ht=f("<th>Acciones"),bt=f("<div><div><h3>Rangos de Peso y Precios</h3></div><div><table><thead><tr><th>Peso Min (lbs)</th><th>Peso Max (lbs)</th><th>Precio/lb</th><th>Descripción</th></tr></thead><tbody>"),vt=f("<div><h3>Opciones de Cajas (Tarifa Plana)</h3><div>"),Pt=f('<div><div>ℹ️ Información</div><ul><li>Las ofertas se aplican automáticamente al calcular precios en facturas</li><li>Los rangos de peso determinan el precio por libra según el peso total</li><li>Las "Libras Gratis" reducen el peso efectivo a cobrar</li><li>Los cambios se reflejarán inmediatamente en nuevas facturas</li><li>Los aranceles aplican solo a categoría "Duraderos"'),Me=f("<div class=category-section><h3 class=category-title>📦 Misceláneos</h3><table class=offers-table><thead><tr><th>Peso (lbs)</th><th>Precio/lb</th><th>Lbs Gratis</th><th>Peso a Pagar</th><th>Precio Efectivo</th></tr></thead><tbody>"),Oe=f("<div class=category-section><h3 class=category-title>🔧 Duraderos</h3><table class=offers-table><thead><tr><th>Peso (lbs)</th><th>Precio/lb</th><th>Arancel/lb</th><th>Total/lb</th></tr></thead><tbody>"),$t=f("<div class=category-section><h3 class=category-title>📐 Cajas Tarifa Plana</h3><table class=offers-table><thead><tr><th>Tamaño</th><th>Peso Máximo</th><th>Precio</th></tr></thead><tbody>"),_t=f(`<div class=print-only><div class=print-container><div class=print-header><h1>YABA Express - Tarifas de Envío</h1><div class=print-info><div class=info-row><span class=label>Configuración:</span><span class=value></span></div><div class=info-row><span class=label>Código:</span><span class=value></span></div><div class=info-row><span class=label>Fecha:</span><span class=value></span></div></div></div><div class=print-section><div class="method-header maritime-header"><h2>🚢 ENVÍO MARÍTIMO</h2><span class=delivery-time>Entrega: 6-8 semanas</span></div></div><div class=print-section><div class="method-header air-header"><h2>✈️ ENVÍO AÉREO</h2><span class=delivery-time>Entrega: 7-10 días</span></div></div><div class=print-footer><p class=footer-text>Todos los precios en USD • Promociones aplicadas automáticamente • Tiempos de entrega estimados • Precios sujetos a cambio</p><p class=footer-company><strong>YABA Express</strong></p></div></div><style>
            @media print {
              body * {
                visibility: hidden;
              }

              .print-only,
              .print-only * {
                visibility: visible !important;
              }

              .print-only {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }

              @page {
                margin: 20mm;
                size: A4;
              }
            }

            .print-container {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: white;
              color: #000;
            }

            .print-header {
              text-align: center;
              border-bottom: 3px solid #1a73e8;
              padding-bottom: 15px;
              margin-bottom: 25px;
            }

            .print-header h1 {
              color: #1a73e8;
              font-size: 28px;
              margin: 0 0 15px 0;
              font-weight: bold;
            }

            .print-info {
              display: flex;
              justify-content: center;
              gap: 30px;
              flex-wrap: wrap;
            }

            .info-row {
              font-size: 13px;
            }

            .info-row .label {
              font-weight: bold;
              color: #555;
            }

            .info-row .value {
              color: #000;
              margin-left: 5px;
            }

            .print-section {
              margin-bottom: 30px;
              page-break-inside: avoid;
            }

            .method-header {
              padding: 12px 15px;
              margin-bottom: 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-radius: 5px;
            }

            .maritime-header {
              background: #1e3a8a;
              color: white;
            }

            .air-header {
              background: #7c3aed;
              color: white;
            }

            .method-header h2 {
              margin: 0;
              font-size: 20px;
              font-weight: bold;
            }

            .delivery-time {
              font-size: 12px;
              opacity: 0.9;
            }

            .category-section {
              margin-bottom: 20px;
            }

            .category-title {
              color: #1a73e8;
              font-size: 16px;
              margin: 0 0 10px 0;
              padding-left: 8px;
              border-left: 3px solid #1a73e8;
              font-weight: bold;
            }

            .offers-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 15px;
              font-size: 13px;
            }

            .offers-table thead {
              background: #f5f5f5;
            }

            .offers-table th {
              padding: 10px 8px;
              text-align: left;
              font-weight: bold;
              color: #333;
              border: 1px solid #ddd;
            }

            .offers-table td {
              padding: 8px;
              border: 1px solid #ddd;
            }

            .offers-table tbody tr:nth-child(even) {
              background: #fafafa;
            }

            .price-col {
              color: #1a73e8;
              font-weight: bold;
            }

            .tariff-col {
              color: #ea4335;
            }

            .highlight-col {
              background: #e8f5e9;
              color: #2e7d32;
              font-weight: bold;
            }

            .center {
              text-align: center;
            }

            .box-size-col {
              font-weight: bold;
            }

            .print-footer {
              margin-top: 30px;
              padding-top: 15px;
              border-top: 2px solid #ddd;
              text-align: center;
            }

            .footer-text {
              font-size: 11px;
              color: #666;
              margin: 5px 0;
            }

            .footer-company {
              font-size: 14px;
              color: #1a73e8;
              margin: 10px 0 0 0;
            }
          `),xt=f("<div><label>🏢 Business ID: <span>(Solo Admin)</span></label><select>"),Ct=f('<div><div><label>Nombre de Configuración:</label><input type=text placeholder="Ej: Ofertas 2024"></div><div><label><input type=checkbox><span>✓ Activa</span></label></div><div><label><input type=checkbox><span>👁️ Visible'),Ne=f("<option> (<!>)"),xe=f("<td>"),wt=f("<td><button>🗑️"),St=f("<tr><td></td><td></td><td></td><td>"),kt=f("<input type=text disabled>"),zt=f("<input type=number step=0.01>"),At=f("<input type=number step=1>"),Lt=f("<div><div><div><label>Tamaño</label></div><div><label>Precio</label></div><div><label>Peso Máximo (lbs)</label></div><div><label>Descripción</label><div>"),Et=f("<strong>"),Bt=f("<strong>$"),It=f("<strong> lbs"),Re=f("<tr><td> - </td><td class=price-col>$</td><td class=center></td><td class=center></td><td class=highlight-col>"),De=f("<tr><td> - </td><td class=price-col>$</td><td class=tariff-col>$</td><td class=highlight-col>$"),Tt=f("<tr><td class=box-size-col></td><td class=center> lbs</td><td class=highlight-col>$");const Ft=Ce=>{const[U,We]=S("maritime"),[M,Ve]=S("miscellaneous"),[L,oe]=S(!1),[D,F]=S(null),[we,Se]=S(!0),[de,ke]=S(!1),[ce,ze]=S([]),[G,pe]=S(null),[re,ge]=S("Default"),[Ae,Le]=S(""),[ye,ue]=S(!0),[me,fe]=S(!0),[J,he]=S("YB100423253156428"),[Ye,le]=S("YB100423253156428"),[ie,Ee]=S(null),[Ge,Be]=S(!1),[Ie,Je]=S([]),be=tt(()=>$e.isAdmin()),[H,q]=S([]),[K,Q]=S([]),[X,Z]=S([]),[ee,te]=S([]),[se,Te]=S([]),Ue=()=>{const c=U(),a=M();return c==="maritime"&&a==="miscellaneous"?H():c==="maritime"&&a==="durable"?K():c==="air"&&a==="miscellaneous"?X():c==="air"&&a==="durable"?ee():[]},V=(c,a,e)=>{const r=U(),s=M(),o=i=>i.map(u=>u.id===c?{...u,[a]:e}:u);r==="maritime"&&s==="miscellaneous"?q(o):r==="maritime"&&s==="durable"?Q(o):r==="air"&&s==="miscellaneous"?Z(o):r==="air"&&s==="durable"&&te(o)},He=()=>{const c={id:Date.now().toString(),min:0,max:0,pricePerLb:0,description:"Nueva oferta"},a=U(),e=M();a==="maritime"&&e==="miscellaneous"?q([...H(),c]):a==="maritime"&&e==="durable"?Q([...K(),c]):a==="air"&&e==="miscellaneous"?Z([...X(),c]):a==="air"&&e==="durable"&&te([...ee(),c])},qe=c=>{if(!confirm("¿Eliminar esta oferta?"))return;const a=U(),e=M(),r=s=>s.filter(o=>o.id!==c);a==="maritime"&&e==="miscellaneous"?q(r):a==="maritime"&&e==="durable"?Q(r):a==="air"&&e==="miscellaneous"?Z(r):a==="air"&&e==="durable"&&te(r)},Fe=c=>{try{const a=JSON.parse(c.data),e=JSON.parse(a.offers);e&&Array.isArray(e)&&e.forEach(s=>{const o=s.method,i=s.category,u=s?.ranges?.map?.((b,p)=>({...b,id:b.id||`${a.id}-${p}`}));if(o==="maritime"&&i==="miscellaneous"?q(u||[]):o==="maritime"&&i==="durable"?Q(u||[]):o==="air"&&i==="miscellaneous"?Z(u||[]):o==="air"&&i==="durable"&&te(u||[]),o==="maritime"&&i==="box_flat_rate"&&s.boxOptions){const b=s.boxOptions.map((p,v)=>({...p,id:p.id||`box-${v}`}));Te(b)}}),pe(c.id),ge(a.offerName||"Default"),Le(a.offerCode||""),ue(a.isActive??!0),fe(a.isVisible??!0);const r=a.businessId||"YB100423253156428";he(r),le(r),console.log("✅ Configuración cargada:",a.offerName)}catch(a){throw console.error("Error al cargar configuración:",a),a}};rt(async()=>{try{if(Se(!0),be()){const e=await $e.loadBusinessesFromFirestore();Je(e.filter(r=>r.isActive).map(r=>({id:r.id,name:r.name})))}const c=await ne.getAll();ze(c);const a=lt();Ee(a?.id||null),c.length>0&&Fe(c[0]),console.log("✅ Configuraciones disponibles:",c.length),console.log("📌 Configuración activa del sistema:",a?.name)}catch(c){console.error("Error al cargar ofertas:",c),F("⚠️ No se pudieron cargar las ofertas guardadas. Usando valores predeterminados."),setTimeout(()=>F(null),5e3)}finally{Se(!1)}});const Ke=c=>{const a=ce().find(e=>e.id===c);a&&Fe(a)},Qe=async c=>{try{await st(c),Ee(c),F("✅ Configuración establecida como activa para facturas"),setTimeout(()=>F(null),3e3)}catch{F("❌ Error al establecer configuración activa"),setTimeout(()=>F(null),3e3)}},Xe=async()=>{try{ke(!0),F("💾 Guardando ofertas...");const c=[{method:"maritime",category:"miscellaneous",ranges:H().map(e=>{const{id:r,...s}=e;return s})},{method:"maritime",category:"durable",ranges:K().map(e=>{const{id:r,...s}=e;return s})},{method:"air",category:"miscellaneous",ranges:X().map(e=>{const{id:r,...s}=e;return s})},{method:"air",category:"durable",ranges:ee().map(e=>{const{id:r,...s}=e;return s})},{method:"maritime",category:"box_flat_rate",boxOptions:se().map(e=>{const{id:r,...s}=e;return s})}],a={name:re(),isActive:ye(),isVisible:me(),businessId:J(),originalBusinessId:Ye()};if(G())await ne.update(G(),c,a),console.log("✅ Configuración actualizada"),le(J());else{const e=await ne.create(c,a);pe(e.id),le(J());const r=await ne.getAll();ze(r),console.log("✅ Nueva configuración creada")}F("✅ Ofertas guardadas exitosamente"),oe(!1),setTimeout(()=>F(null),3e3)}catch(c){console.error("Error al guardar ofertas:",c),F("❌ Error al guardar ofertas. Intenta nuevamente."),setTimeout(()=>F(null),5e3)}finally{ke(!1)}},Ze=async()=>{const c=prompt("Nombre para la nueva configuración:");if(!c)return;const a=prompt("Código para la configuración (opcional):")||`${c.toUpperCase().replace(/\s+/g,"_")}`,e=$e.getBusinessId();pe(null),ge(c),Le(a),ue(!0),fe(!0),he(e),le(e),q([]),Q([]),Z([]),te([]),Te([]),F("ℹ️ Nueva configuración creada. Agrega rangos y guarda."),setTimeout(()=>F(null),3e3)},et=()=>{Be(!0),setTimeout(()=>{window.print(),Be(!1)},500)},B={padding:"0.5rem",border:"1px solid var(--border-color)","border-radius":"var(--border-radius-sm)","font-size":"0.875rem",width:"100%"};return(()=>{var c=_e();return c.style.setProperty("padding","2rem"),t(c,l(it,{get children(){var a=_e();return a.style.setProperty("padding","1.5rem"),t(a,l(y,{get when(){return we()},get children(){var e=at(),r=e.firstChild;return e.style.setProperty("padding","2rem"),e.style.setProperty("text-align","center"),e.style.setProperty("color","var(--text-muted)"),r.style.setProperty("font-size","2rem"),r.style.setProperty("margin-bottom","1rem"),e}}),null),t(a,l(y,{get when(){return!we()},get children(){return[(()=>{var e=dt(),r=e.firstChild,s=r.firstChild,o=r.nextSibling;return e.style.setProperty("display","flex"),e.style.setProperty("justify-content","space-between"),e.style.setProperty("align-items","flex-start"),e.style.setProperty("margin-bottom","1.5rem"),r.style.setProperty("flex","1"),s.style.setProperty("font-size","1.5rem"),s.style.setProperty("font-weight","600"),s.style.setProperty("margin-bottom","0.75rem"),t(r,l(y,{get when(){return!L()},get fallback(){return(()=>{var i=Ct(),u=i.firstChild,b=u.firstChild,p=b.nextSibling,v=u.nextSibling,x=v.firstChild,A=x.firstChild,O=A.nextSibling,n=v.nextSibling,_=n.firstChild,I=_.firstChild,d=I.nextSibling;return i.style.setProperty("display","grid"),i.style.setProperty("grid-template-columns","repeat(2, 1fr)"),i.style.setProperty("gap","1rem"),i.style.setProperty("max-width","800px"),b.style.setProperty("display","block"),b.style.setProperty("font-weight","600"),b.style.setProperty("margin-bottom","0.25rem"),b.style.setProperty("font-size","0.75rem"),b.style.setProperty("color","var(--text-muted)"),p.$$input=h=>ge(h.currentTarget.value),t(i,l(y,{get when(){return be()},get children(){var h=xt(),C=h.firstChild,m=C.firstChild,$=m.nextSibling,g=C.nextSibling;return C.style.setProperty("display","block"),C.style.setProperty("font-weight","600"),C.style.setProperty("margin-bottom","0.25rem"),C.style.setProperty("font-size","0.75rem"),C.style.setProperty("color","var(--text-muted)"),$.style.setProperty("color","var(--danger-color)"),$.style.setProperty("font-size","0.65rem"),g.addEventListener("change",w=>he(w.currentTarget.value)),t(g,l(R,{get each(){return Ie()},children:w=>(()=>{var P=Ne(),T=P.firstChild,k=T.nextSibling;return k.nextSibling,t(P,()=>w.name,T),t(P,()=>w.id,k),z(()=>P.value=w.id),P})()})),z(w=>j(g,B,w)),z(()=>g.value=J()),h}}),v),x.style.setProperty("display","flex"),x.style.setProperty("align-items","center"),x.style.setProperty("gap","0.5rem"),x.style.setProperty("cursor","pointer"),A.addEventListener("change",h=>ue(h.currentTarget.checked)),O.style.setProperty("font-size","0.875rem"),_.style.setProperty("display","flex"),_.style.setProperty("align-items","center"),_.style.setProperty("gap","0.5rem"),_.style.setProperty("cursor","pointer"),I.addEventListener("change",h=>fe(h.currentTarget.checked)),d.style.setProperty("font-size","0.875rem"),z(h=>j(p,B,h)),z(()=>p.value=re()),z(()=>A.checked=ye()),z(()=>I.checked=me()),i})()},get children(){var i=ot(),u=i.firstChild,b=u.firstChild,p=b.nextSibling,v=u.nextSibling,x=v.firstChild,A=x.nextSibling,O=A.nextSibling,n=O.nextSibling;return n.nextSibling,u.style.setProperty("color","var(--text-muted)"),u.style.setProperty("font-size","0.875rem"),u.style.setProperty("margin-bottom","0.25rem"),t(p,re),v.style.setProperty("color","var(--text-muted)"),v.style.setProperty("font-size","0.75rem"),t(v,Ae,A),t(v,()=>ye()?" ✓ Activa":" ✗ Inactiva",n),t(v,()=>me()?" 👁️ Visible":" 👁️‍🗨️ Oculta",null),t(v,l(y,{get when(){return be()},get children(){return[" • 🏢 Business: ",ae(()=>Ie().find(_=>_.id===J())?.name||J())]}}),null),i}}),null),o.style.setProperty("display","flex"),o.style.setProperty("gap","0.5rem"),o.style.setProperty("flex-wrap","wrap"),t(o,l(y,{get when(){return L()},get children(){return[l(W,{variant:"primary",onClick:Xe,get disabled(){return de()},get children(){return de()?"💾 Guardando...":"💾 Guardar Cambios"}}),l(W,{variant:"outline",onClick:()=>oe(!1),get disabled(){return de()},children:"✕ Cancelar"})]}}),null),t(o,l(y,{get when(){return!L()},get children(){return[l(W,{variant:"primary",onClick:()=>oe(!0),children:"✏️ Editar Ofertas"}),l(W,{variant:"outline",onClick:Ze,children:"➕ Nueva Configuración"}),l(W,{variant:"outline",onClick:et,children:"🖨️ Imprimir"})]}}),null),t(o,l(y,{get when(){return Ce.onClose},get children(){return l(W,{variant:"outline",get onClick(){return Ce.onClose},children:"Cerrar"})}}),null),e})(),l(y,{get when(){return D()},get children(){var e=_e();return e.style.setProperty("padding","1rem"),e.style.setProperty("border-radius","var(--border-radius-sm)"),e.style.setProperty("margin-bottom","1rem"),t(e,D),z(r=>{var s=D()?.includes("❌")?"var(--danger-light)":D()?.includes("⚠️")?"var(--warning-light)":"var(--success-light)",o=D()?.includes("❌")?"var(--danger-color)":D()?.includes("⚠️")?"var(--warning-color)":"var(--success-color)",i=`1px solid ${D()?.includes("❌")?"var(--danger-color)":D()?.includes("⚠️")?"var(--warning-color)":"var(--success-color)"}`;return s!==r.e&&((r.e=s)!=null?e.style.setProperty("background",s):e.style.removeProperty("background")),o!==r.t&&((r.t=o)!=null?e.style.setProperty("color",o):e.style.removeProperty("color")),i!==r.a&&((r.a=i)!=null?e.style.setProperty("border",i):e.style.removeProperty("border")),r},{e:void 0,t:void 0,a:void 0}),e}}),l(y,{get when(){return ae(()=>ce().length>1)()&&!L()},get children(){var e=gt(),r=e.firstChild,s=r.firstChild,o=r.nextSibling;return e.style.setProperty("margin-bottom","1.5rem"),e.style.setProperty("padding","1rem"),e.style.setProperty("background","var(--gray-50)"),e.style.setProperty("border-radius","var(--border-radius-sm)"),r.style.setProperty("display","flex"),r.style.setProperty("justify-content","space-between"),r.style.setProperty("align-items","center"),r.style.setProperty("margin-bottom","0.5rem"),s.style.setProperty("font-weight","600"),s.style.setProperty("font-size","0.875rem"),t(r,l(y,{get when(){return G()!==ie()},get children(){return l(W,{size:"sm",variant:"primary",onClick:()=>Qe(G()),children:"⭐ Hacer Activa"})}}),null),t(r,l(y,{get when(){return G()===ie()},get children(){var i=ct();return i.style.setProperty("padding","0.25rem 0.75rem"),i.style.setProperty("background","var(--success-color)"),i.style.setProperty("color","white"),i.style.setProperty("border-radius","4px"),i.style.setProperty("font-size","0.75rem"),i.style.setProperty("font-weight","600"),i}}),null),o.addEventListener("change",i=>Ke(i.currentTarget.value)),t(o,l(R,{get each(){return ce()},children:i=>{const u=JSON.parse(i.data),b=i.id===ie();return(()=>{var p=Ne(),v=p.firstChild,x=v.nextSibling;return x.nextSibling,t(p,b?"⭐ ":"",v),t(p,()=>u.offerName||i.id,v),t(p,()=>u.offerCode,x),z(()=>p.value=i.id),p})()}})),t(e,l(y,{get when(){return ie()},get children(){var i=pt();return i.style.setProperty("margin-top","0.5rem"),i.style.setProperty("font-size","0.75rem"),i.style.setProperty("color","var(--text-muted)"),i}}),null),z(i=>j(o,B,i)),z(()=>o.value=G()||""),e}}),(()=>{var e=yt(),r=e.firstChild,s=r.firstChild,o=s.nextSibling,i=r.nextSibling,u=i.firstChild,b=u.nextSibling;return e.style.setProperty("display","grid"),e.style.setProperty("grid-template-columns","1fr 1fr"),e.style.setProperty("gap","1rem"),e.style.setProperty("margin-bottom","1.5rem"),s.style.setProperty("display","block"),s.style.setProperty("font-weight","600"),s.style.setProperty("margin-bottom","0.5rem"),s.style.setProperty("font-size","0.875rem"),o.addEventListener("change",p=>We(p.currentTarget.value)),u.style.setProperty("display","block"),u.style.setProperty("font-weight","600"),u.style.setProperty("margin-bottom","0.5rem"),u.style.setProperty("font-size","0.875rem"),b.addEventListener("change",p=>Ve(p.currentTarget.value)),z(p=>{var v=B,x=B;return p.e=j(o,v,p.e),p.t=j(b,x,p.t),p},{e:void 0,t:void 0}),z(()=>o.value=U()),z(()=>b.value=M()),e})(),l(y,{get when(){return M()!=="box_flat_rate"},get children(){var e=bt(),r=e.firstChild,s=r.firstChild,o=r.nextSibling,i=o.firstChild,u=i.firstChild,b=u.firstChild,p=b.firstChild,v=p.nextSibling,x=v.nextSibling,A=x.nextSibling,O=u.nextSibling;return e.style.setProperty("background","var(--gray-50)"),e.style.setProperty("border-radius","var(--border-radius-sm)"),e.style.setProperty("padding","1.5rem"),r.style.setProperty("display","flex"),r.style.setProperty("justify-content","space-between"),r.style.setProperty("align-items","center"),r.style.setProperty("margin-bottom","1rem"),s.style.setProperty("font-weight","600"),t(r,l(y,{get when(){return L()},get children(){return l(W,{size:"sm",variant:"primary",onClick:He,children:"➕ Agregar Rango"})}}),null),o.style.setProperty("overflow-x","auto"),i.style.setProperty("width","100%"),i.style.setProperty("border-collapse","collapse"),i.style.setProperty("background","white"),b.style.setProperty("background-color","var(--gray-100)"),p.style.setProperty("padding","0.75rem"),p.style.setProperty("text-align","left"),p.style.setProperty("font-size","0.875rem"),v.style.setProperty("padding","0.75rem"),v.style.setProperty("text-align","left"),v.style.setProperty("font-size","0.875rem"),x.style.setProperty("padding","0.75rem"),x.style.setProperty("text-align","left"),x.style.setProperty("font-size","0.875rem"),t(b,l(y,{get when(){return M()==="miscellaneous"},get children(){return[(()=>{var n=ut();return n.style.setProperty("padding","0.75rem"),n.style.setProperty("text-align","left"),n.style.setProperty("font-size","0.875rem"),n})(),(()=>{var n=mt();return n.style.setProperty("padding","0.75rem"),n.style.setProperty("text-align","left"),n.style.setProperty("font-size","0.875rem"),n})()]}}),A),t(b,l(y,{get when(){return M()==="durable"},get children(){var n=ft();return n.style.setProperty("padding","0.75rem"),n.style.setProperty("text-align","left"),n.style.setProperty("font-size","0.875rem"),n}}),A),A.style.setProperty("padding","0.75rem"),A.style.setProperty("text-align","left"),A.style.setProperty("font-size","0.875rem"),t(b,l(y,{get when(){return L()},get children(){var n=ht();return n.style.setProperty("padding","0.75rem"),n.style.setProperty("text-align","center"),n.style.setProperty("font-size","0.875rem"),n}}),null),t(O,l(R,{get each(){return Ue()},children:n=>(()=>{var _=St(),I=_.firstChild,d=I.nextSibling,h=d.nextSibling,C=h.nextSibling;return _.style.setProperty("border-bottom","1px solid var(--border-color)"),I.style.setProperty("padding","0.75rem"),t(I,l(y,{get when(){return L()},get fallback(){return n.min},get children(){return l(Y,{type:"number",get value(){return n.min},onChange:m=>V(n.id,"min",parseFloat(m)),get style(){return{...B,width:"80px"}},step:"0.1"})}})),d.style.setProperty("padding","0.75rem"),t(d,l(y,{get when(){return L()},get fallback(){return n.max},get children(){return l(Y,{type:"number",get value(){return n.max},onChange:m=>V(n.id,"max",parseFloat(m)),get style(){return{...B,width:"80px"}},step:"0.1"})}})),h.style.setProperty("padding","0.75rem"),t(h,l(y,{get when(){return L()},get fallback(){return`$${n.pricePerLb.toFixed(2)}`},get children(){return l(Y,{type:"number",get value(){return n.pricePerLb},onChange:m=>V(n.id,"pricePerLb",parseFloat(m)),get style(){return{...B,width:"90px"}},step:"0.01"})}})),t(_,l(y,{get when(){return M()==="miscellaneous"},get children(){return[(()=>{var m=xe();return m.style.setProperty("padding","0.75rem"),t(m,l(y,{get when(){return L()},get fallback(){return n.freeWeight||"-"},get children(){return l(Y,{type:"number",get value(){return n.freeWeight||0},onChange:$=>V(n.id,"freeWeight",parseFloat($)||void 0),get style(){return{...B,width:"70px"}},step:"0.1"})}})),m})(),(()=>{var m=xe();return m.style.setProperty("padding","0.75rem"),t(m,l(y,{get when(){return L()},get fallback(){return n.needBePay||"-"},get children(){return l(Y,{type:"number",get value(){return n.needBePay||0},onChange:$=>V(n.id,"needBePay",parseFloat($)||void 0),get style(){return{...B,width:"70px"}},step:"0.1"})}})),m})()]}}),C),t(_,l(y,{get when(){return M()==="durable"},get children(){var m=xe();return m.style.setProperty("padding","0.75rem"),t(m,l(y,{get when(){return L()},get fallback(){return`$${(n.tariffPerLb||0).toFixed(2)}`},get children(){return l(Y,{type:"number",get value(){return n.tariffPerLb||0},onChange:$=>V(n.id,"tariffPerLb",parseFloat($)||0),get style(){return{...B,width:"80px"}},step:"0.01"})}})),m}}),C),C.style.setProperty("padding","0.75rem"),t(C,l(y,{get when(){return L()},get fallback(){return n.description},get children(){return l(Y,{type:"text",get value(){return n.description||""},onChange:m=>V(n.id,"description",m),get style(){return{...B,width:"200px"}}})}})),t(_,l(y,{get when(){return L()},get children(){var m=wt(),$=m.firstChild;return m.style.setProperty("padding","0.75rem"),m.style.setProperty("text-align","center"),$.$$click=()=>qe(n.id),$.style.setProperty("padding","0.25rem 0.5rem"),$.style.setProperty("background","var(--danger-color)"),$.style.setProperty("color","white"),$.style.setProperty("border","none"),$.style.setProperty("border-radius","var(--border-radius-sm)"),$.style.setProperty("cursor","pointer"),$.style.setProperty("font-size","0.75rem"),m}}),null),_})()})),e}}),l(y,{get when(){return M()==="box_flat_rate"},get children(){var e=vt(),r=e.firstChild,s=r.nextSibling;return e.style.setProperty("background","var(--gray-50)"),e.style.setProperty("border-radius","var(--border-radius-sm)"),e.style.setProperty("padding","1.5rem"),r.style.setProperty("font-weight","600"),r.style.setProperty("margin-bottom","1rem"),s.style.setProperty("display","grid"),s.style.setProperty("gap","1rem"),t(s,l(R,{get each(){return se()},children:o=>(()=>{var i=Lt(),u=i.firstChild,b=u.firstChild,p=b.firstChild,v=b.nextSibling,x=v.firstChild,A=v.nextSibling,O=A.firstChild,n=A.nextSibling,_=n.firstChild,I=_.nextSibling;return i.style.setProperty("padding","1rem"),i.style.setProperty("background","white"),i.style.setProperty("border-radius","var(--border-radius-sm)"),i.style.setProperty("border","1px solid var(--border-color)"),u.style.setProperty("display","grid"),u.style.setProperty("grid-template-columns","repeat(4, 1fr)"),u.style.setProperty("gap","1rem"),u.style.setProperty("align-items","center"),p.style.setProperty("display","block"),p.style.setProperty("font-size","0.75rem"),p.style.setProperty("margin-bottom","0.25rem"),t(b,l(y,{get when(){return L()},get fallback(){return(()=>{var d=Et();return t(d,()=>o.size),d})()},get children(){var d=kt();return z(h=>j(d,B,h)),z(()=>d.value=o.size),d}}),null),x.style.setProperty("display","block"),x.style.setProperty("font-size","0.75rem"),x.style.setProperty("margin-bottom","0.25rem"),t(v,l(y,{get when(){return L()},get fallback(){return(()=>{var d=Bt();return d.firstChild,t(d,()=>o.price.toFixed(2),null),d})()},get children(){var d=zt();return z(h=>j(d,B,h)),z(()=>d.value=o.price),d}}),null),O.style.setProperty("display","block"),O.style.setProperty("font-size","0.75rem"),O.style.setProperty("margin-bottom","0.25rem"),t(A,l(y,{get when(){return L()},get fallback(){return(()=>{var d=It(),h=d.firstChild;return t(d,()=>o.maxWeight,h),d})()},get children(){var d=At();return z(h=>j(d,B,h)),z(()=>d.value=o.maxWeight),d}}),null),_.style.setProperty("display","block"),_.style.setProperty("font-size","0.75rem"),_.style.setProperty("margin-bottom","0.25rem"),I.style.setProperty("font-size","0.875rem"),t(I,()=>o.description),i})()})),e}}),(()=>{var e=Pt(),r=e.firstChild,s=r.nextSibling;return e.style.setProperty("margin-top","1.5rem"),e.style.setProperty("padding","1rem"),e.style.setProperty("background","var(--info-light)"),e.style.setProperty("border-radius","var(--border-radius-sm)"),e.style.setProperty("border","1px solid var(--info-color)"),r.style.setProperty("font-weight","600"),r.style.setProperty("margin-bottom","0.5rem"),s.style.setProperty("margin","0"),s.style.setProperty("padding-left","1.5rem"),s.style.setProperty("font-size","0.875rem"),e})()]}}),null),a}}),null),t(c,l(y,{get when(){return Ge()},get children(){var a=_t(),e=a.firstChild,r=e.firstChild,s=r.firstChild,o=s.nextSibling,i=o.firstChild,u=i.firstChild,b=u.nextSibling,p=i.nextSibling,v=p.firstChild,x=v.nextSibling,A=p.nextSibling,O=A.firstChild,n=O.nextSibling,_=r.nextSibling;_.firstChild;var I=_.nextSibling;return I.firstChild,t(b,re),t(x,Ae),t(n,()=>new Date().toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})),t(_,l(y,{get when(){return H().length>0},get children(){var d=Me(),h=d.firstChild,C=h.nextSibling,m=C.firstChild,$=m.nextSibling;return t($,l(R,{get each(){return H()},children:g=>(()=>{var w=Re(),P=w.firstChild,T=P.firstChild,k=P.nextSibling;k.firstChild;var E=k.nextSibling,N=E.nextSibling,ve=N.nextSibling;return t(P,()=>g.min,T),t(P,()=>g.max,null),t(k,()=>g.pricePerLb.toFixed(2),null),t(E,()=>g.freeWeight||"—"),t(N,()=>g.needBePay||"—"),t(ve,(()=>{var Pe=ae(()=>!!g.effectivePricePerLb);return()=>Pe()?`$${g.effectivePricePerLb.toFixed(2)}`:"—"})()),w})()})),d}}),null),t(_,l(y,{get when(){return K().length>0},get children(){var d=Oe(),h=d.firstChild,C=h.nextSibling,m=C.firstChild,$=m.nextSibling;return t($,l(R,{get each(){return K()},children:g=>(()=>{var w=De(),P=w.firstChild,T=P.firstChild,k=P.nextSibling;k.firstChild;var E=k.nextSibling;E.firstChild;var N=E.nextSibling;return N.firstChild,t(P,()=>g.min,T),t(P,()=>g.max,null),t(k,()=>g.pricePerLb.toFixed(2),null),t(E,()=>(g.tariffPerLb||0).toFixed(2),null),t(N,()=>(g.pricePerLb+(g.tariffPerLb||0)).toFixed(2),null),w})()})),d}}),null),t(_,l(y,{get when(){return se().length>0},get children(){var d=$t(),h=d.firstChild,C=h.nextSibling,m=C.firstChild,$=m.nextSibling;return t($,l(R,{get each(){return se()},children:g=>(()=>{var w=Tt(),P=w.firstChild,T=P.nextSibling,k=T.firstChild,E=T.nextSibling;return E.firstChild,t(P,()=>g.size),t(T,()=>g.maxWeight,k),t(E,()=>g.price.toFixed(2),null),w})()})),d}}),null),t(I,l(y,{get when(){return X().length>0},get children(){var d=Me(),h=d.firstChild,C=h.nextSibling,m=C.firstChild,$=m.nextSibling;return t($,l(R,{get each(){return X()},children:g=>(()=>{var w=Re(),P=w.firstChild,T=P.firstChild,k=P.nextSibling;k.firstChild;var E=k.nextSibling,N=E.nextSibling,ve=N.nextSibling;return t(P,()=>g.min,T),t(P,()=>g.max,null),t(k,()=>g.pricePerLb.toFixed(2),null),t(E,()=>g.freeWeight||"—"),t(N,()=>g.needBePay||"—"),t(ve,(()=>{var Pe=ae(()=>!!g.effectivePricePerLb);return()=>Pe()?`$${g.effectivePricePerLb.toFixed(2)}`:"—"})()),w})()})),d}}),null),t(I,l(y,{get when(){return ee().length>0},get children(){var d=Oe(),h=d.firstChild,C=h.nextSibling,m=C.firstChild,$=m.nextSibling;return t($,l(R,{get each(){return ee()},children:g=>(()=>{var w=De(),P=w.firstChild,T=P.firstChild,k=P.nextSibling;k.firstChild;var E=k.nextSibling;E.firstChild;var N=E.nextSibling;return N.firstChild,t(P,()=>g.min,T),t(P,()=>g.max,null),t(k,()=>g.pricePerLb.toFixed(2),null),t(E,()=>(g.tariffPerLb||0).toFixed(2),null),t(N,()=>(g.pricePerLb+(g.tariffPerLb||0)).toFixed(2),null),w})()})),d}}),null),a}}),null),c})()};je(["input","click"]);const Ot=()=>l(nt,{title:"Ofertas YABA",get children(){return l(Ft,{})}});export{Ot as default};
