'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/919945726707"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_-8px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
}
