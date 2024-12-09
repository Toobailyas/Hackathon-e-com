import Image from 'next/image';
import Link from 'next/link';
const CartTable = () => {
  return (
    <div>
      <div className="max-w-4xl px-3 font-[ClashDisplay] my-10 text-[#2A254B]">
        <h1 className="text-4xl py-7 text-[36px] font-normal leading-[50.4px]">
          Your Shopping Cart
        </h1>
        <h2 className="text-2xl px-3 py-4">Product</h2>
        <table className="w-full border-collapse font-clash border-gray-200 text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 font-normal">Product</th>
              <th className="py-2 px-4 border-b border-gray-300 font-normal text-center">Quantity</th>
              <th className="py-2 px-4 border-b border-gray-300 font-normal text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* First Product */}
            <tr>
              <td className="py-4 px-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/s-cart-1.jpg"
                    alt="Graystone Vase"
                    width={60}
                    height={80}
                    className="h-[50]"
                  />
                  <div>
                    <h3 className="font-medium">Graystone vase</h3>
                    <p className="text-gray-500 text-sm">
                      A timeless ceramic vase with a thin color grey glaze.
                    </p>
                    <p className="font-semibold mt-1">£85</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-center">1</td>
              <td className="py-4 px-4 text-right font-semibold">£85</td>
            </tr>

            {/* Second Product */}
            <tr>
              <td className="py-4 px-4 border-b font-clash border-gray-300">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/s-cart-2.jpg"
                    alt="Basic White Vase"
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-medium">Basic white vase</h3>
                    <p className="text-gray-500 font-[Santoshi] text-sm">
                      Beautiful and simple, this is one for the classics.
                    </p>
                    <p className="font-[Santoshi] font-semibold mt-1">£125</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">1</td>
              <td className="py-4 px-4 border-b border-gray-300 text-right text-gray-800 font-semibold">
                £125
              </td>
            </tr>
          </tbody>
        </table>

        {/* Subtotal, Taxes, and Checkout */}
        <div className="mt-8 flex flex-col items-end gap-4 lg:text-right">
          <div className="flex gap-4 justify-end w-full max-w-sm text-lg">
            <p className="font-medium">Subtotal</p>
            <p className="font-semibold">£210</p>
          </div>
          <p className="text-gray-500 text-sm">
            Taxes and shipping are calculated at checkout
          </p>
          <Link href="../p-listing" >
          <button className="text-white bg-[#2A254B] border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Go to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
