'use client';

const valueProps = [
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Your payment information is encrypted and secure',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    description: 'Free shipping on orders over $50. Express options available',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day hassle-free returns on most items',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Our team is here to help whenever you need us',
  },
];

export default function ValueProps() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl mb-3">{prop.icon}</div>
              <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

