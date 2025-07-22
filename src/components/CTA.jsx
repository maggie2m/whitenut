import React from "react";

export default function CTA() {
  return (
    <section
      className="py-12 my-12 text-center text-white px-4 w-fit m-auto rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(220 50% 8%), hsl(45 100% 51%))",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold">
        Ready to Transform Your Ideas?
      </h2>
      <p className="mt-2 mb-6">
        Let’s discuss how our premium services can elevate your business to new
        heights.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 cursor-pointer">
        Start Your Project
      </button>
    </section>
  );
}
