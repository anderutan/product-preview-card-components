import mobileImg from '../assets/image-product-mobile.jpg';
import desktopImg from '../assets/image-product-desktop.jpg';
import icon from '../assets/icon-cart.svg';
import useWindowDimensions from './useWindowDimensions';

export default function Cards() {
  const { height, width } = useWindowDimensions();

  return (
    <div className='w-full bg-white rounded-xl overflow-hidden mb:max-w-[576px] mb:grid mb:grid-cols-2'>
      <img
        src={width > 500 ? desktopImg : mobileImg}
        alt=''
        className='mb:h-full mb:object-cover'
      />
      <div className='m-6 flex flex-col'>
        <p className='tracking-[0.5em] text-[12px] mb-3'>PERFUME</p>
        <h1 className='text-4xl font-bold font-fraunces mb-4'>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className='mb-5'>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className='flex gap-4 items-center mb-5'>
          <p className='text-dark-cyan font-fraunces font-bold text-4xl'>
            $149.99
          </p>
          <p className='text-base line-through'>$169.99</p>
        </div>
        <button className='bg-dark-cyan hover:bg-emerald-900 flex justify-center items-center py-4 rounded-md gap-4 cursor-pointer'>
          <img src={icon} alt='' />
          <p className='font-bold text-white'>Add to Cart</p>
        </button>
      </div>
    </div>
  );
}
