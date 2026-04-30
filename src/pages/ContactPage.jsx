import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaPhone, FaEnvelope, FaClock, FaGlobe,
  FaPaperPlane, FaCheckCircle, FaArrowRight, FaWhatsapp,
  FaLinkedin, FaBuilding, FaShip
} from 'react-icons/fa';
import './ContactPage.css';



/* ── Main Page ─────────────────────────────────────── */
const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const pageRef = useRef(null);

  /* Reset scroll container to top on mount */
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTop = 0;
    }
  }, []);



  const onSubmit = async (data) => {
    try {
      await fetch('https://formsubmit.co/ajax/info@anjotraders.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'First Name': data.firstName,
          'Last Name': data.lastName,
          'Email': data.email,
          'Phone': data.phone,
          'Service': data.service,
          'Message': data.message,
          '_subject': 'New Enquiry from ANJO Traders Website',
          '_template': 'table',
        }),
      });
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); reset(); }, 6000);
    } catch (err) {
      console.error('Form error:', err);
      alert('Failed to send. Please try again.');
    }
  };

  /* ── Contact info data ── */
  const infoCards = [
    {
      id: 'hq',
      icon: FaBuilding,
      color: '#f97316',
      glow: 'rgba(249,115,22,0.35)',
      tag: 'Head Office',
      title: 'Thoothukudi, India',
      detail: '11/625, Sahayamatha Pattanam, 5th Street, Mariya Mahal Road, Thoothukudi – 628002, Tamil Nadu',
      action: null,
    },
    {
      id: 'phone',
      icon: FaPhone,
      color: '#06b6d4',
      glow: 'rgba(6,182,212,0.35)',
      tag: 'Direct Lines',
      title: 'Call Us Anytime',
      detail: '+91 99949 66061 · +91 99945 87749',
      action: 'tel:+919994966061',
    },
    {
      id: 'email',
      icon: FaEnvelope,
      color: '#8b5cf6',
      glow: 'rgba(139,92,246,0.35)',
      tag: 'Email',
      title: 'info@anjotraders.com',
      detail: 'We reply within 24 business hours',
      action: 'mailto:info@anjotraders.com',
    },
    {
      id: 'hours',
      icon: FaClock,
      color: '#10b981',
      glow: 'rgba(16,185,129,0.35)',
      tag: 'Business Hours',
      title: 'Mon – Sat · 9 AM – 6 PM',
      detail: 'IST (Indian Standard Time) · Sunday Closed',
      action: null,
    },
    {
      id: 'srilanka',
      icon: FaShip,
      color: '#f59e0b',
      glow: 'rgba(245,158,11,0.35)',
      tag: '🇱🇰 Sri Lanka Branch',
      title: 'Colombo',
      detail: 'South Asian Hub — Regional Operations',
      action: null,
    },
    {
      id: 'thailand',
      icon: FaGlobe,
      color: '#ec4899',
      glow: 'rgba(236,72,153,0.35)',
      tag: '🇹🇭 Thailand Branch',
      title: 'Laem Chabang',
      detail: 'Southeast Asia Hub — Port Operations',
      action: null,
    },
  ];

  const services = [
    'Select a category...',
    'Vegetables Export',
    'Fruits Export',
    'Cereals & Food Grains',
    'Pulses & Dal',
    'Industrial Salt',
    'Merchandise / Grocery',
    'Green Link Maritime',
    'Container Commercialization',
    'Automobiles',
    'Other',
  ];

  return (
    <div className="ctp-page" ref={pageRef}>

      {/* ── AMBIENT ORBS ── */}
      <div className="ctp-orbs" aria-hidden="true">
        <div className="ctp-orb ctp-orb-a" />
        <div className="ctp-orb ctp-orb-b" />
        <div className="ctp-orb ctp-orb-c" />
        <div className="ctp-orb ctp-orb-d" />
      </div>

      {/* ════════════════════════════════════════════
          HERO — Split-screen layout
      ════════════════════════════════════════════ */}
      <section className="ctp-hero" id="ctp-hero">
        {/* Left — Text */}
        <div className="ctp-hero-left">
          <div className="ctp-hero-noise" aria-hidden="true" />

          <div className="ctp-hero-sub-image" style={{ marginBottom: '2rem' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/file_00000000d6d0720bb35c517c5ce7866e (1).png`} 
              alt="Connected By Ethics" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div className="ctp-hero-actions">
            <a href="tel:+919994966061" className="ctp-btn-primary">
              <FaPhone size={13} />
              +91 99949 66061
            </a>
            <a href="https://wa.me/919994966061" className="ctp-btn-ghost" target="_blank" rel="noreferrer">
              <FaWhatsapp size={15} />
              WhatsApp
            </a>
          </div>

        </div>

        {/* Right — Visual panel */}
        <div className="ctp-hero-right">
          <div className="ctp-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900"
              alt="ANJO Traders business contact"
              className="ctp-hero-img"
            />
            <div className="ctp-hero-img-overlay" />
          </div>

          {/* Floating info cards removed as requested */}
        </div>

        {/* Scroll indicator */}
        <div className="ctp-scroll-hint">
          <span>SCROLL</span>
          <div className="ctp-scroll-bar" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — Info cards
      ════════════════════════════════════════════ */}
      <section className="ctp-info-section" id="ctp-offices">
        <div className="ctp-container">
          <div className="ctp-section-head reveal">
            <span className="ctp-overline">Our Footprint</span>
            <h2 className="ctp-section-h2">Where We <em>Operate</em></h2>
            <p className="ctp-section-p">
              Three strategic hubs across Asia — connecting producers to global markets.
            </p>
          </div>

          <div className="ctp-info-container-scroll">
            <div className="ctp-info-grid">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`ctp-info-card reveal${card.action ? ' ctp-info-card--link' : ''}`}
                    style={{ '--card-color': card.color, '--card-glow': card.glow, transitionDelay: `${i * 0.07}s` }}
                    onClick={() => card.action && window.open(card.action, '_self')}
                  >
                    <div className="ctp-ic-glow" />
                    <div className="ctp-ic-icon">
                      <Icon size={20} color={card.color} />
                    </div>
                    <div className="ctp-ic-body">
                      <span className="ctp-ic-tag">{card.tag}</span>
                      <h3 className="ctp-ic-title">{card.title}</h3>
                      <p className="ctp-ic-detail">{card.detail}</p>
                    </div>
                    {card.action && (
                      <div className="ctp-ic-arrow">
                        <FaArrowRight size={12} color={card.color} />
                      </div>
                    )}
                    <div className="ctp-ic-line" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — Form + Map (side by side)
      ════════════════════════════════════════════ */}
      <section className="ctp-form-section" id="ctp-enquiry">
        <div className="ctp-container">
          <div className="ctp-form-map-grid">

            {/* ── LEFT: FORM ── */}
            <div className="ctp-form-col reveal-left">
              <span className="ctp-overline">Send a Message</span>
              <h2 className="ctp-section-h2" style={{ marginBottom: '0.25rem' }}>
                Start a <em>Conversation</em>
              </h2>
              <p className="ctp-section-p" style={{ marginBottom: '1rem' }}>
                Tell us about your requirements — we respond within 24 business hours.
              </p>

              {submitted ? (
                <div className="ctp-success-state">
                  <div className="ctp-success-icon">
                    <FaCheckCircle size={52} color="#10b981" />
                  </div>
                  <h3>Enquiry Received!</h3>
                  <p>Our trade specialists will be in touch within 24 hours.</p>
                  <div className="ctp-success-dots">
                    <span /><span /><span />
                  </div>
                </div>
              ) : (
                <form className="ctp-form" onSubmit={handleSubmit(onSubmit)} noValidate>

                  {/* Row 1: First + Last */}
                  <div className="ctp-form-row">
                    <div className={`ctp-field${errors.firstName ? ' ctp-field--error' : ''}`}>
                      <label className="ctp-label" htmlFor="firstName">First Name *</label>
                      <input
                        id="firstName"
                        type="text"
                        className={`ctp-input${activeField === 'firstName' ? ' ctp-input--active' : ''}`}
                        placeholder="John"
                        {...register('firstName', { required: 'Required' })}
                        onFocus={() => setActiveField('firstName')}
                        onBlur={() => setActiveField(null)}
                      />
                      {errors.firstName && <span className="ctp-error-msg">{errors.firstName.message}</span>}
                    </div>
                    <div className={`ctp-field${errors.lastName ? ' ctp-field--error' : ''}`}>
                      <label className="ctp-label" htmlFor="lastName">Last Name *</label>
                      <input
                        id="lastName"
                        type="text"
                        className={`ctp-input${activeField === 'lastName' ? ' ctp-input--active' : ''}`}
                        placeholder="Doe"
                        {...register('lastName', { required: 'Required' })}
                        onFocus={() => setActiveField('lastName')}
                        onBlur={() => setActiveField(null)}
                      />
                      {errors.lastName && <span className="ctp-error-msg">{errors.lastName.message}</span>}
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="ctp-form-row">
                    <div className={`ctp-field${errors.email ? ' ctp-field--error' : ''}`}>
                      <label className="ctp-label" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        className={`ctp-input${activeField === 'email' ? ' ctp-input--active' : ''}`}
                        placeholder="you@company.com"
                        {...register('email', {
                          required: 'Required',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
                        })}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                      />
                      {errors.email && <span className="ctp-error-msg">{errors.email.message}</span>}
                    </div>
                    <div className="ctp-field">
                      <label className="ctp-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        className={`ctp-input${activeField === 'phone' ? ' ctp-input--active' : ''}`}
                        placeholder="+91 98765 43210"
                        {...register('phone')}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="ctp-field">
                    <label className="ctp-label" htmlFor="service">Product / Service Enquiry</label>
                    <select
                      id="service"
                      className={`ctp-input ctp-select${activeField === 'service' ? ' ctp-input--active' : ''}`}
                      {...register('service')}
                      onFocus={() => setActiveField('service')}
                      onBlur={() => setActiveField(null)}
                    >
                      {services.map((s, i) => (
                        <option key={i} value={i === 0 ? '' : s.toLowerCase().replace(/\s+/g, '-')}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className={`ctp-field${errors.message ? ' ctp-field--error' : ''}`}>
                    <label className="ctp-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      rows={3}
                      className={`ctp-input ctp-textarea${activeField === 'message' ? ' ctp-input--active' : ''}`}
                      placeholder="Describe your export requirements, volume, destination country, preferred timeline..."
                      {...register('message', { required: 'Required' })}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                    />
                    {errors.message && <span className="ctp-error-msg">{errors.message.message}</span>}
                  </div>

                  {/* Submit */}
                  <button type="submit" className="ctp-submit-btn">
                    <span className="ctp-btn-shine" />
                    <FaPaperPlane size={14} />
                    Send Enquiry
                    <FaArrowRight size={14} />
                  </button>


                  {/* Social links */}
                  <div className="ctp-social-row">
                    <span>Or reach us on</span>
                    <a href="https://wa.me/919994966061" className="ctp-social-link" target="_blank" rel="noreferrer">
                      <FaWhatsapp size={16} /> WhatsApp
                    </a>
                    <a href="https://linkedin.com" className="ctp-social-link" target="_blank" rel="noreferrer">
                      <FaLinkedin size={16} /> LinkedIn
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* ── RIGHT: MAP + BRANCHES ── */}
            <div className="ctp-map-col reveal-right">
              <span className="ctp-overline">Find Us</span>
              <h2 className="ctp-section-h2" style={{ marginBottom: '0.75rem' }}>
                Our <em>Location</em>
              </h2>

              <div className="ctp-map-wrap">
                <div className="ctp-map-frame">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126149.12753474226!2d78.07754995!3d8.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ef8c6e99ee2b%3A0x2b78ee01f2e88e87!2sTuticorin%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="ANJO Traders — Thoothukudi"
                  />
                </div>
                <div className="ctp-map-corner ctp-map-corner-tl" />
                <div className="ctp-map-corner ctp-map-corner-br" />
              </div>

              {/* Branch cards */}
              <div className="ctp-branches">
                {[
                  { flag: '🇮🇳', city: 'Thoothukudi', role: 'Head Office', color: '#f97316' },
                  { flag: '🇱🇰', city: 'Colombo',     role: 'Sri Lanka Branch', color: '#10b981' },
                  { flag: '🇹🇭', city: 'Laem Chabang', role: 'Thailand Branch', color: '#06b6d4' },
                ].map((b, i) => (
                  <div className="ctp-branch" key={i} style={{ '--bc': b.color }}>
                    <div className="ctp-branch-stripe" />
                    <span className="ctp-branch-flag">{b.flag}</span>
                    <div className="ctp-branch-info">
                      <strong>{b.city}</strong>
                      <span>{b.role}</span>
                    </div>
                    <div className="ctp-branch-dot" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>

  );
};

export default ContactPage;
