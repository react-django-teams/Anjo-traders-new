import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe, FaPaperPlane, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './ContactPage.css';

const SECTION_IDS = ['hero', 'offices', 'enquiry', 'footer'];

/* ── Main Page ────────────────────────────────────────────────── */
const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});
  const containerRef = useRef(null);
  const [isPresenting, setIsPresenting] = useState(true);
  const [activeSectionId, setActiveSectionId] = useState('hero');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            setActiveSectionId(e.target.id);
          }
        });
      },
      { threshold: 0.5, root: container }
    );
    container.querySelectorAll('section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const goNext = useCallback((currentId) => {
    if (!isPresenting) return;
    const idx = SECTION_IDS.indexOf(currentId);
    const nextIdx = (idx + 1) % SECTION_IDS.length;
    const nextId = SECTION_IDS[nextIdx];
    const el = containerRef.current?.querySelector(`#${nextId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [isPresenting]);

  useEffect(() => {
    if (!isPresenting) return;
    const interval = activeSectionId === 'hero' ? 6000 : 9000;
    const t = setTimeout(() => goNext(activeSectionId), interval);
    return () => clearTimeout(t);
  }, [activeSectionId, isPresenting, goNext]);

  const onSubmit = async (data) => {
    try {
      await fetch("https://formsubmit.co/ajax/info@anjotraders.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
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
      setTimeout(() => { setSubmitted(false); reset(); }, 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const contactCards = [
    {
      icon: FaMapMarkerAlt,
      accent: '#f59e0b',
      title: 'Head Office',
      subtitle: 'Registered Address',
      lines: ['11/625, Sahayamatha Pattanam,', '5th Street, Mariya Mahal Road,', 'Thoothukudi – 628002, Tamil Nadu, India']
    },
    {
      icon: FaPhone,
      accent: '#06b6d4',
      title: 'Direct Lines',
      subtitle: 'Call Us Anytime',
      lines: ['+91 98943 22104', '+91 88704 00456']
    },
    {
      icon: FaEnvelope,
      accent: '#8b5cf6',
      title: 'Digital Contact',
      subtitle: 'Email & Online',
      lines: ['info@anjotraders.com', 'www.anjotraders.com']
    },
    {
      icon: FaClock,
      accent: '#f97316',
      title: 'Business Hours',
      subtitle: 'Operating Schedule',
      lines: ['Monday – Saturday', '9:00 AM – 6:00 PM IST', 'Sunday: Closed']
    },
    {
      icon: FaMapMarkerAlt,
      accent: '#10b981',
      title: 'Branch — Sri Lanka',
      subtitle: 'South Asian Hub',
      lines: ['Colombo, Sri Lanka', 'Regional Operations']
    },
    {
      icon: FaGlobe,
      accent: '#f59e0b',
      title: 'Branch — Thailand',
      subtitle: 'Southeast Asia Hub',
      lines: ['Laem Chabang, Thailand', 'Port Operations']
    },
  ];

  return (
    <div ref={containerRef} className="cp-page">

      {/* ── BACKGROUND PARTICLE LAYER ── */}
      <div className="cp-bg-particles">
        <div className="cp-orb cp-orb-1" />
        <div className="cp-orb cp-orb-2" />
        <div className="cp-orb cp-orb-3" />
      </div>

      {/* ── CINEMATIC TOGGLE ── */}
      <button className="cp-toggle" onClick={() => setIsPresenting(p => !p)}>
        <span className={`cp-toggle-dot ${isPresenting ? 'active' : ''}`} />
        {isPresenting ? 'Cinematic Flow' : 'Manual View'}
      </button>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section id="hero" className="cp-hero">
        {/* Full-bleed background image */}
        <div className="cp-hero-bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600')`
        }} />
        <div className="cp-hero-overlay" />
        <div className="cp-hero-grid" />

        <div className="cp-hero-content">
          {/* Eyebrow */}
          <div className="cp-eyebrow">
            <span className="cp-eyebrow-dot" />
            Global Trade Partner
          </div>

          {/* Headline */}
          <h1 className="cp-hero-h1">
            Let's Build<br />
            <span className="cp-gradient-text">Something</span><br />
            Together
          </h1>

          <p className="cp-hero-sub">
            Bulk export, import, and trade solutions from Thoothukudi to the world.
            Our teams across India, Sri Lanka, and Thailand are ready to connect.
          </p>

          {/* CTA Pills */}
          <div className="cp-hero-pills">
            <a href="tel:+919894322104" className="cp-pill cp-pill-primary">
              <FaPhone size={12} /> +91 98943 22104
            </a>
            <a href="mailto:info@anjotraders.com" className="cp-pill cp-pill-ghost">
              <FaEnvelope size={12} /> info@anjotraders.com
            </a>
          </div>


        </div>

        {/* Scroll cue */}
        <div className="cp-scroll-cue">
          <span>SCROLL</span>
          <div className="cp-scroll-line" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — OFFICES
      ══════════════════════════════════════════════════════════ */}
      <section id="offices" className="cp-offices">
        <div className="cp-section-inner">

          {/* Section Header */}
          <div className="cp-section-header">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-dot" style={{ background: '#f59e0b' }} />
              Our Footprint
            </div>
            <h2 className="cp-section-h2">Where We Operate</h2>
            <p className="cp-section-sub">
              Three strategic locations across Asia — connecting producers to global markets.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="cp-cards-grid">
            {contactCards.map((card, i) => (
              <div className="cp-card" key={i} style={{ '--accent': card.accent }}>
                <div className="cp-card-icon-wrap">
                  <card.icon size={18} color={card.accent} />
                </div>
                <div className="cp-card-body">
                  <p className="cp-card-subtitle">{card.subtitle}</p>
                  <h3 className="cp-card-title">{card.title}</h3>
                  {card.lines.map((line, li) => (
                    <p className="cp-card-line" key={li}>{line}</p>
                  ))}
                </div>
                <div className="cp-card-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — ENQUIRY FORM + MAP
      ══════════════════════════════════════════════════════════ */}
      <section id="enquiry" className="cp-enquiry">
        <div className="cp-section-inner cp-enquiry-grid">

          {/* LEFT — FORM */}
          <div className="cp-form-side">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-dot" style={{ background: '#06b6d4' }} />
              Send a Message
            </div>
            <h2 className="cp-section-h2" style={{ marginBottom: '0.5rem' }}>Start a Conversation</h2>
            <p className="cp-section-sub" style={{ marginBottom: '2rem' }}>
              Tell us about your requirements — we respond within 24 hours.
            </p>

            {submitted ? (
              <div className="cp-success">
                <FaCheckCircle size={48} color="#10b981" />
                <h3>Enquiry Received!</h3>
                <p>Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="cp-form-row">
                  {[['firstName', 'First Name', 'John'], ['lastName', 'Last Name', 'Doe']].map(([id, label, ph]) => (
                    <div className="cp-field" key={id}>
                      <label className="cp-label">{label} *</label>
                      <input
                        type="text"
                        className={`cp-input ${focused[id] ? 'cp-input--focus' : ''} ${errors[id] ? 'cp-input--error' : ''}`}
                        {...register(id, { required: 'Required' })}
                        placeholder={ph}
                        onFocus={() => setFocused(f => ({ ...f, [id]: true }))}
                        onBlur={() => setFocused(f => ({ ...f, [id]: false }))}
                      />
                      {errors[id] && <p className="cp-error">{errors[id].message}</p>}
                    </div>
                  ))}
                </div>

                <div className="cp-form-row">
                  <div className="cp-field">
                    <label className="cp-label">Email Address *</label>
                    <input
                      type="email"
                      className={`cp-input ${focused.email ? 'cp-input--focus' : ''} ${errors.email ? 'cp-input--error' : ''}`}
                      {...register('email', { required: 'Required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' } })}
                      placeholder="you@company.com"
                      onFocus={() => setFocused(f => ({ ...f, email: true }))}
                      onBlur={() => setFocused(f => ({ ...f, email: false }))}
                    />
                    {errors.email && <p className="cp-error">{errors.email.message}</p>}
                  </div>
                  <div className="cp-field">
                    <label className="cp-label">Phone Number</label>
                    <input
                      type="tel"
                      className={`cp-input ${focused.phone ? 'cp-input--focus' : ''}`}
                      {...register('phone')}
                      placeholder="+91 98765 43210"
                      onFocus={() => setFocused(f => ({ ...f, phone: true }))}
                      onBlur={() => setFocused(f => ({ ...f, phone: false }))}
                    />
                  </div>
                </div>

                <div className="cp-field">
                  <label className="cp-label">Product / Service Enquiry</label>
                  <select
                    className={`cp-input cp-select ${focused.service ? 'cp-input--focus' : ''}`}
                    {...register('service')}
                    onFocus={() => setFocused(f => ({ ...f, service: true }))}
                    onBlur={() => setFocused(f => ({ ...f, service: false }))}
                  >
                    <option value="">Select a category...</option>
                    <option value="vegetables">Vegetables Export</option>
                    <option value="fruits">Fruits Export</option>
                    <option value="cereals">Cereals &amp; Food Grains</option>
                    <option value="pulses">Pulses &amp; Dal</option>
                    <option value="salt">Industrial Salt</option>
                    <option value="merchandise">Merchandise / Grocery</option>
                    <option value="maritime">Green Link Maritime</option>
                    <option value="containers">Container Commercialization</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="cp-field">
                  <label className="cp-label">Message *</label>
                  <textarea
                    rows={4}
                    className={`cp-input cp-textarea ${focused.message ? 'cp-input--focus' : ''} ${errors.message ? 'cp-input--error' : ''}`}
                    {...register('message', { required: 'Required' })}
                    placeholder="Describe your export requirements, volume, destination country, and preferred timeline..."
                    onFocus={() => setFocused(f => ({ ...f, message: true }))}
                    onBlur={() => setFocused(f => ({ ...f, message: false }))}
                  />
                  {errors.message && <p className="cp-error">{errors.message.message}</p>}
                </div>

                <button type="submit" className="cp-submit-btn">
                  <FaPaperPlane size={14} />
                  Send Enquiry
                  <FaArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — MAP */}
          <div className="cp-map-side">
            <div className="cp-eyebrow">
              <span className="cp-eyebrow-dot" style={{ background: '#f59e0b' }} />
              Find Us
            </div>
            <h2 className="cp-section-h2" style={{ marginBottom: '0.5rem' }}>Our Location</h2>
            <p className="cp-section-sub" style={{ marginBottom: '1.5rem' }}>
              Thoothukudi (Tuticorin), Tamil Nadu, India — Gateway to International Trade.
            </p>

            <div className="cp-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126149.12753474226!2d78.07754995!3d8.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef8c6e99ee2b%3A0x2b78ee01f2e88e87!2sTuticorin%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen="" loading="lazy"
                title="ANJO Traders - Thoothukudi"
              />
            </div>

            <div className="cp-branch-pills">
              {[
                { flag: '🇮🇳', city: 'Thoothukudi', role: 'Head Office', accent: '#f59e0b' },
                { flag: '🇱🇰', city: 'Colombo', role: 'Sri Lanka Branch', accent: '#10b981' },
                { flag: '🇹🇭', city: 'Laem Chabang', role: 'Thailand Branch', accent: '#06b6d4' },
              ].map((b, i) => (
                <div className="cp-branch-pill" key={i} style={{ '--ba': b.accent }}>
                  <span className="cp-branch-flag">{b.flag}</span>
                  <div>
                    <div className="cp-branch-city">{b.city}</div>
                    <div className="cp-branch-role">{b.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — FOOTER CTA
      ══════════════════════════════════════════════════════════ */}
      <section id="footer" className="cp-footer-cta">
        <div className="cp-footer-bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600')`
        }} />
        <div className="cp-footer-overlay" />
        <div className="cp-footer-inner">
          <div className="cp-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="cp-eyebrow-dot" />
            ANJO Traders
          </div>
          <h2 className="cp-footer-h2">
            Export · Import<br />
            <span className="cp-gradient-text">Traders of All Goods</span>
          </h2>
          <p className="cp-footer-tagline">
            Connected by Ethics · <strong>Right People</strong> · Right Skill · Right Environment
          </p>
          <div className="cp-footer-divider" />
          <p className="cp-footer-copy">© 2024 ANJO Traders. All rights reserved.</p>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
