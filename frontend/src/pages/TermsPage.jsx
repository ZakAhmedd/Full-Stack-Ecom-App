import React from 'react'

const TermsPage = () => {
  return (

    <div className="h-auto mx-15 xl:mx-40">
      <div className="flex justify-center items-center gap-2 text-3xl font-medium tracking-wide">
        <span className="text-gray-500">TERMS &</span>
        <span className="text-gray-800">CONDITIONS</span>
        <span className="w-16 h-[2.5px] bg-black"></span>
      </div>

      <div className="flex flex-col justify-center items-center space-y-20 w-100 text-md text-gray-700 xl:w-220 mx-auto mt-20 xl:mt-30 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-4">SHIPPING</h2>
          <p>ORDERS ARE PROCESSED MON–FRI AND SHIPPED WITHIN 3–5 BUSINESS DAYS FROM THE UK.</p>
          <p>UK ORDERS SHIPPED VIA ROYAL MAIL.</p>
          <p>INTERNATIONAL ORDERS SHIPPED VIA PARCELFORCE.</p>
          <p className="mt-4">
            <strong>Note:</strong> Customers outside of the UK may incur additional customs duties, taxes, or other requirements.
            Please ensure you confirm these before placing your order. We are not responsible for parcels returned for unpaid customs duties or non-compliance, and no refunds will be issued under those circumstances.
          </p>
          <p className="mt-4">
            PLEASE CONTACT HELLO@DUMMY.COM FOR ANY SHIPPING ENQUIRIES.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">RETURNS</h2>
          <p>ALL SALES ARE FINAL UNLESS AN ERROR HAS BEEN MADE ON OUR PART.</p>
          <p>
            RETURNED ITEMS MUST BE IN NEW & UNUSED CONDITION IN ORIGINAL PACKAGING.
            ONCE YOUR ORDER IS RECEIVED AND INSPECTED, A REFUND WILL BE PROCESSED TO YOUR ORIGINAL PAYMENT METHOD WITHIN 3–5 DAYS.
            SHIPPING CHARGES, DUTIES & TAXES ARE NON-REFUNDABLE.
          </p>
          <p className="mt-4">
            DUE TO THE NATURE OF OUR BRAND WE DON’T OFFER EXCHANGES AS WE CARRY VERY LIMITED STOCK.
          </p>
          <p>
            WE MAY MAKE DEDUCTIONS FROM REFUNDS TO REFLECT ANY REDUCTION IN THE VALUE OF THE ITEMS WHICH MAY HAVE RESULTED FROM YOUR HANDLING OF THEM.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsPage