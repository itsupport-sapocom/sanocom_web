import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div
        className="chat-btn"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-label={open ? 'Close chat widget' : 'Open chat widget'}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <span aria-hidden="true">&#128172;</span>
      </div>

      {open && (
        <div className="chat-box" ref={chatRef}>
          <div className="chat-header">
            <div>
              <strong>Chat with SAPOCOM</strong>
              <p>Quick help for demos, pricing & support</p>
            </div>
            <span
              className="close"
              onClick={() => setOpen(false)}
              role="button"
              tabIndex={0}
              aria-label="Close chat box"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setOpen(false);
                }
              }}
            >
              &times;
            </span>
          </div>

          <div className="chat-body">
            <a
              href="https://wa.me/919919636685"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-card whatsapp"
            >
              <div className="icon">
                <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
                  <path
                    fill="white"
                    d="M19.11 17.27c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.46.13-.15.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.83-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.86.13.18 1.93 2.94 4.68 4.12.65.28 1.15.45 1.54.58.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.1-.25-.16-.52-.29z"
                  />
                  <path
                    fill="white"
                    d="M16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.07 2.33 7.04L5 29l7.16-1.88C14.04 27.7 15 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-.85 0-1.68-.13-2.47-.38l-.35-.11-4.25 1.11 1.14-4.14-.11-.34A9.96 9.96 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"
                  />
                </svg>
              </div>
              <div>
                <b>WhatsApp: +91 9919636685</b>
                <small>Instant chat for sales and quick assistance</small>
              </div>
            </a>

            <Link href="/contact-us" className="chat-card call">
              <div className="icon" aria-hidden="true">
                &#128222;
              </div>
              <div className="chat-content">
                <b>Request a Callback</b>
                <small>Share your details and our team will call you back</small>
              </div>
            </Link>

            <Link href="/contact-us" className="chat-card mail">
              <div className="icon" aria-hidden="true">
                &#9993;
              </div>
              <div className="chat-content">
                <b>Send an Enquiry</b>
                <small>Use the contact form for quotes, proposals and demos</small>
              </div>
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .chat-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0a2540, #1e3a8a);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .chat-box {
          position: fixed;
          bottom: 95px;
          right: 25px;
          width: 340px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          z-index: 9999;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-header {
          background: linear-gradient(135deg, #0a2540, #1e3a8a);
          color: white;
          padding: 18px;
          display: flex;
          justify-content: space-between;
        }

        .chat-header p {
          font-size: 12px;
          margin: 0;
        }

        .close {
          cursor: pointer;
          font-size: 18px;
        }

        .chat-body {
          padding: 15px;
          background: #f1f5f9;
        }

        .chat-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 12px;
          color: #111;
          transition: 0.25s;
          text-decoration: none;
        }

        .chat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .whatsapp {
          background: #ecfdf5;
        }

        .whatsapp .icon {
          background: #25d366;
        }

        .call {
          background: #eff6ff;
        }

        .call .icon {
          background: #3b82f6;
        }

        .mail {
          background: #fef2f2;
        }

        .mail .icon {
          background: #ef4444;
        }

        .chat-card small {
          display: block;
          color: #666;
        }

        .chat-content {
          flex: 1;
        }

        @media (max-width: 480px) {
          .chat-btn {
            right: 16px;
            bottom: 16px;
          }

          .chat-box {
            right: 16px;
            bottom: 88px;
            width: calc(100vw - 32px);
          }
        }
      `}</style>
    </>
  );
}
