'use client';

export default function TrustBar() {
  return (
    <div className="bg-primary text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <span className="flex items-center gap-1.5">
          <span className="text-sm">🔒</span>
          <span>Secure checkout</span>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <span className="text-sm">🚚</span>
          <span>Fast shipping</span>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <span className="text-sm">↩️</span>
          <span>Easy returns</span>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <span className="text-sm">💬</span>
          <span>24/7 support</span>
        </span>
      </div>
    </div>
  );
}

