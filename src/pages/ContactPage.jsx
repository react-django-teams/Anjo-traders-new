import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';


/* ── Main Page ────────────────────────────────────────────────── */
const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});

  const onSubmit = async (data) => {
    try {
      await fetch("https://formsubmit.co/ajax/info@anjotraders.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "First Name": data.firstName,
          "Last Name": data.lastName,
          "Email": data.email,
          "Phone": data.phone,
          "Service": data.service,
          "Message": data.message,
          "_subject": "New Enquiry from ANJO Traders Website",
          "_template": "table"
        })
      });
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); reset(); }, 4000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const inputStyle = (name) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 12,
    fontSize: 14,
    background: focused[name] ? '#fff' : 'rgba(255,248,235,0.9)',
    border: `1.5px solid ${focused[name] ? '#f97316' : 'rgba(251,146,60,0.35)'}`,
    outline: 'none',
    color: '#1c1400',
    transition: 'all 0.3s ease',
    boxShadow: focused[name] ? '0 0 0 3px rgba(249,115,22,0.15)' : 'none',
  });

  const contactCards = [
    { icon: FaMapMarkerAlt, color: '#ea580c', bg: '#fff7ed', border: '#fed7aa', title: 'Head Office',        lines: ['11/625, Sahayamatha Pattanam,', '5th Street, Mariya Mahal Road,', 'Tuticorin – 628002, India'] },
    { icon: FaPhone,        color: '#d97706', bg: '#fffbeb', border: '#fde68a', title: 'Phone Numbers',      lines: ['+91 98943 22104', '+91 88704 00456'] },
    { icon: FaEnvelope,     color: '#f59e0b', bg: '#fefce8', border: '#fef08a', title: 'Email & Web',        lines: ['info@anjotraders.com', 'anjotraders.com'] },
    { icon: FaClock,        color: '#b45309', bg: '#fff7ed', border: '#fed7aa', title: 'Business Hours',     lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'] },
    { icon: FaMapMarkerAlt, color: '#c2410c', bg: '#fff7ed', border: '#fca5a5', title: 'Branch — Sri Lanka', lines: ['Colombo, Sri Lanka'] },
    { icon: FaGlobe,        color: '#d97706', bg: '#fffbeb', border: '#fde68a', title: 'Branch — Thailand',  lines: ['Laem Chabang, Thailand'] },
  ];


  return (
    <div style={{ background: 'linear-gradient(135deg, #fff8f0 0%, #fffde7 50%, #fff3e0 100%)', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @keyframes gradOrange { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes floatOrb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
        .cp-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .cp-card:hover { transform: translateY(-6px); }
        .cp-input::placeholder { color: rgba(120,80,0,0.4); }
        .cp-input option { background: #fff; color: #1c1400; }
        .text-grad-orange {
          background: linear-gradient(90deg, #ea580c, #f97316, #f59e0b, #eab308, #f97316, #ea580c);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: gradOrange 4s ease infinite;
        }
      `}</style>

      {/* Floating warm orbs */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:0 }}>
        <div style={{ position:'absolute', top:'8%', left:'3%', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)', filter:'blur(50px)', animation:'floatOrb 10s ease-in-out infinite' }}/>
        <div style={{ position:'absolute', top:'40%', right:'5%', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle, rgba(250,204,21,0.2) 0%, transparent 70%)', filter:'blur(50px)', animation:'floatOrb 13s ease-in-out infinite reverse' }}/>
        <div style={{ position:'absolute', bottom:'10%', left:'25%', width:280, height:280, borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)', filter:'blur(50px)', animation:'floatOrb 16s ease-in-out infinite' }}/>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{
        position:'relative', minHeight:'90vh', display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center', padding:'120px 24px 80px',
        textAlign:'center', zIndex:1,
        backgroundImage:`url('https://www.shutterstock.com/image-photo/call-center-customer-support-indian-600nw-2561972505.jpg')`,
        backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'
      }}>

        {/* Readability Overlay */}
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.35)', zIndex:0 }}/>

        {/* Subtle dot grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize:'30px 30px', pointerEvents:'none', zIndex:1 }}/>

        {/* Badge */}
        <div style={{ position:'relative', zIndex:2, display:'inline-flex', alignItems:'center', gap:8, padding:'8px 20px', borderRadius:999, border:'1.5px solid rgba(234,88,12,0.4)', background:'rgba(255,237,213,0.9)', color:'#c2410c', fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:32, backdropFilter:'blur(8px)' }}>
          <span style={{ width:8, height:8, borderRadius:'50%', background:'#ea580c', boxShadow:'0 0 8px rgba(234,88,12,0.7)' }}/>
          Get In Touch
        </div>

        {/* Headline */}
        <h1 style={{ position:'relative', zIndex:2, fontSize:'clamp(2.8rem,8vw,5.5rem)', fontWeight:900, lineHeight:1.05, marginBottom:24, letterSpacing:'-0.03em', textShadow:'0 4px 20px rgba(0,0,0,0.6)' }}>
          <span style={{ color:'#ffffff' }}>Let's </span>
          <span className="text-grad-orange">Build</span>
          <br/>
          <span style={{ color:'#ffffff' }}>Something </span>
          <span style={{ color:'#ffffff' }}>Together</span>
        </h1>

        <p style={{ position:'relative', zIndex:2, color:'rgba(255,255,255,0.95)', fontSize:17, maxWidth:520, lineHeight:1.7, marginBottom:40, textShadow:'0 2px 10px rgba(0,0,0,0.6)' }}>
          Ready to discuss bulk export requirements? Our team in Tuticorin, Colombo, and Laem Chabang is ready to connect.
        </p>

        {/* Contact Pills */}
        <div style={{ position:'relative', zIndex:2, display:'flex', flexWrap:'wrap', justifyContent:'center', gap:12 }}>
          <a href="tel:+919894322104" style={{
            display:'flex', alignItems:'center', gap:10, padding:'12px 24px', borderRadius:999,
            background:'rgba(255,255,255,0.85)', border:'1.5px solid rgba(234,88,12,0.3)',
            color:'#ea580c', fontSize:13, fontWeight:700, textDecoration:'none',
            backdropFilter:'blur(10px)', transition:'all 0.3s ease',
            boxShadow:'0 4px 16px rgba(234,88,12,0.12)'
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#ea580c'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 8px 24px rgba(234,88,12,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.85)'; e.currentTarget.style.color='#ea580c'; e.currentTarget.style.boxShadow='0 4px 16px rgba(234,88,12,0.12)'; }}>
            <FaPhone size={13}/> +91 98943 22104
          </a>
          <a href="mailto:info@anjotraders.com" style={{
            display:'flex', alignItems:'center', gap:10, padding:'12px 24px', borderRadius:999,
            background:'rgba(255,255,255,0.85)', border:'1.5px solid rgba(217,119,6,0.3)',
            color:'#d97706', fontSize:13, fontWeight:700, textDecoration:'none',
            backdropFilter:'blur(10px)', transition:'all 0.3s ease',
            boxShadow:'0 4px 16px rgba(217,119,6,0.12)'
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#d97706'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 8px 24px rgba(217,119,6,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.85)'; e.currentTarget.style.color='#d97706'; e.currentTarget.style.boxShadow='0 4px 16px rgba(217,119,6,0.12)'; }}>
            <FaEnvelope size={13}/> info@anjotraders.com
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, color:'rgba(120,80,0,0.4)', zIndex:2 }}>
          <span style={{ fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:600 }}>Scroll</span>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom, rgba(180,83,9,0.4), transparent)' }}/>
        </div>
      </section>

      {/* ── INFO CARDS ──────────────────────────────────────────── */}
      <section style={{ padding:'80px 24px', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p style={{ color:'#ea580c', fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:12 }}>Our Offices</p>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, color:'#1c1400', letterSpacing:'-0.02em' }}>Where We Are</h2>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20 }}>
            {contactCards.map((card, i) => (
              <div key={i} className="cp-card" style={{
                borderRadius:20, padding:'28px 24px',
                background: card.bg,
                border:`1.5px solid ${card.border}`,
                position:'relative', overflow:'hidden',
                boxShadow:'0 4px 20px rgba(234,88,12,0.07)'
              }}>
                {/* Glow in top-right */}
                <div style={{ position:'absolute', top:-20, right:-20, width:80, height:80, borderRadius:'50%', background:card.border, filter:'blur(20px)', opacity:0.6, pointerEvents:'none' }}/>

                <div style={{ width:52, height:52, borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, background:`${card.color}18`, border:`1.5px solid ${card.color}30` }}>
                  <card.icon size={22} color={card.color}/>
                </div>
                <h3 style={{ color:'#1c1400', fontWeight:700, fontSize:15, marginBottom:12 }}>{card.title}</h3>
                {card.lines.map((line, li) => (
                  <p key={li} style={{ color:'rgba(120,60,0,0.65)', fontSize:13, lineHeight:1.7, margin:0 }}>{line}</p>
                ))}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:`linear-gradient(90deg, transparent, ${card.color}, transparent)`, opacity:0.4 }}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ──────────────────────────────────────────── */}
      <section style={{ padding:'20px 24px 80px', position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:48 }}>

          {/* Form */}
          <div>
            <div style={{ marginBottom:32 }}>
              <p style={{ color:'#ea580c', fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:10 }}>Send a Message</p>
              <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:900, color:'#1c1400', letterSpacing:'-0.02em' }}>Send Us an Enquiry</h2>
              <p style={{ color:'rgba(120,60,0,0.55)', fontSize:13, marginTop:8 }}>We respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div style={{ borderRadius:20, border:'1.5px solid rgba(234,88,12,0.25)', background:'#fff7ed', padding:40, display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', gap:16, minHeight:380 }}>
                <FaCheckCircle color="#ea580c" size={52}/>
                <h3 style={{ color:'#1c1400', fontSize:22, fontWeight:800 }}>Message Sent!</h3>
                <p style={{ color:'rgba(120,60,0,0.6)', fontSize:14 }}>Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                  {[['firstName','First Name','John'], ['lastName','Last Name','Doe']].map(([id, label, ph]) => (
                    <div key={id}>
                      <label style={{ display:'block', color:'rgba(92,45,0,0.7)', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>{label} *</label>
                      <input type="text" {...register(id, { required: 'Required' })}
                        className="cp-input" style={inputStyle(id)} placeholder={ph}
                        onFocus={() => setFocused(f => ({ ...f, [id]: true }))}
                        onBlur={() => setFocused(f => ({ ...f, [id]: false }))}
                      />
                      {errors[id] && <p style={{ color:'#ea580c', fontSize:11, marginTop:4 }}>{errors[id].message}</p>}
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display:'block', color:'rgba(92,45,0,0.7)', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>Email Address *</label>
                  <input type="email" {...register('email', { required:'Required', pattern:{ value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:'Invalid email' }})}
                    className="cp-input" style={inputStyle('email')} placeholder="you@company.com"
                    onFocus={() => setFocused(f => ({ ...f, email: true }))}
                    onBlur={() => setFocused(f => ({ ...f, email: false }))}
                  />
                  {errors.email && <p style={{ color:'#ea580c', fontSize:11, marginTop:4 }}>{errors.email.message}</p>}
                </div>

                <div>
                  <label style={{ display:'block', color:'rgba(92,45,0,0.7)', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>Phone Number</label>
                  <input type="tel" {...register('phone')}
                    className="cp-input" style={inputStyle('phone')} placeholder="+91 98765 43210"
                    onFocus={() => setFocused(f => ({ ...f, phone: true }))}
                    onBlur={() => setFocused(f => ({ ...f, phone: false }))}
                  />
                </div>

                <div>
                  <label style={{ display:'block', color:'rgba(92,45,0,0.7)', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>Product / Service Enquiry</label>
                  <select {...register('service')} className="cp-input" style={inputStyle('service')}
                    onFocus={() => setFocused(f => ({ ...f, service: true }))}
                    onBlur={() => setFocused(f => ({ ...f, service: false }))}>
                    <option value="">Select a category...</option>
                    <option value="vegetables">Vegetables Export</option>
                    <option value="fruits">Fruits Export</option>
                    <option value="cereals">Cereals & Food Grains</option>
                    <option value="pulses">Pulses & Dal</option>
                    <option value="salt">Industrial Salt</option>
                    <option value="merchandise">Merchandise / Grocery</option>
                    <option value="maritime">Green Link Maritime</option>
                    <option value="containers">Container Commercialization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display:'block', color:'rgba(92,45,0,0.7)', fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>Message *</label>
                  <textarea rows={4} {...register('message', { required:'Required' })}
                    className="cp-input" style={{ ...inputStyle('message'), resize:'none' }}
                    placeholder="Describe your export requirements, volume, destination, and timeline..."
                    onFocus={() => setFocused(f => ({ ...f, message: true }))}
                    onBlur={() => setFocused(f => ({ ...f, message: false }))}
                  />
                  {errors.message && <p style={{ color:'#ea580c', fontSize:11, marginTop:4 }}>{errors.message.message}</p>}
                </div>

                <button type="submit" style={{
                  width:'100%', padding:'16px', borderRadius:14, fontWeight:800, fontSize:14,
                  color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', gap:12,
                  background:'linear-gradient(135deg, #ea580c 0%, #f97316 50%, #f59e0b 100%)',
                  border:'none', cursor:'pointer',
                  boxShadow:'0 8px 28px rgba(234,88,12,0.35)',
                  transition:'all 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 36px rgba(234,88,12,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 28px rgba(234,88,12,0.35)'; }}>
                  <FaPaperPlane size={14}/> Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div>
            <div style={{ marginBottom:32 }}>
              <p style={{ color:'#d97706', fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:10 }}>Locate Us</p>
              <h2 style={{ fontSize:'clamp(1.8rem,3vw,2.4rem)', fontWeight:900, color:'#1c1400', letterSpacing:'-0.02em' }}>Find Our Office</h2>
              <p style={{ color:'rgba(120,60,0,0.55)', fontSize:13, marginTop:8 }}>Tuticorin (Thoothukudi), Tamilnadu, India</p>
            </div>

            <div style={{ borderRadius:20, overflow:'hidden', height:320, border:'1.5px solid rgba(251,146,60,0.3)', boxShadow:'0 16px 50px rgba(234,88,12,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126149.12753474226!2d78.07754995!3d8.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef8c6e99ee2b%3A0x2b78ee01f2e88e87!2sTuticorin%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border:0 }}
                allowFullScreen="" loading="lazy"
                title="ANJO Traders - Tuticorin"
              />
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:16 }}>
              {[
                { flag:'🇮🇳', city:'Tuticorin',    role:'Head Office', color:'#ea580c' },
                { flag:'🇱🇰', city:'Colombo',      role:'Sri Lanka',   color:'#d97706' },
                { flag:'🇹🇭', city:'Laem Chabang', role:'Thailand',    color:'#f59e0b' },
              ].map((b, i) => (
                <div key={i} style={{
                  borderRadius:14, padding:'16px 10px', textAlign:'center',
                  background:'rgba(255,237,213,0.8)', border:'1.5px solid rgba(251,146,60,0.25)',
                  backdropFilter:'blur(8px)', transition:'all 0.3s ease', cursor:'default'
                }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.95)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(234,88,12,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,237,213,0.8)'; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='none'; }}>
                  <div style={{ fontSize:26, marginBottom:6 }}>{b.flag}</div>
                  <div style={{ color:'#1c1400', fontSize:12, fontWeight:700 }}>{b.city}</div>
                  <div style={{ color:'rgba(120,60,0,0.55)', fontSize:10, marginTop:2 }}>{b.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section style={{ padding:'32px 24px', borderTop:'1px solid rgba(251,146,60,0.2)', textAlign:'center', position:'relative', zIndex:1, background:'rgba(255,237,213,0.4)' }}>
        <p style={{ color:'rgba(120,60,0,0.4)', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase', fontWeight:700, marginBottom:8 }}>ANJO Traders — Export · Import · Traders of All Goods</p>
        <p style={{ color:'rgba(92,45,0,0.55)', fontSize:13 }}>
          Connected By Ethics · <span style={{ color:'#ea580c', fontWeight:700 }}>Right People</span> · <span style={{ color:'#d97706', fontWeight:700 }}>Right Skill</span> · Right Environment
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
