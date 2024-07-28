import MainLogo from "../../assets/Image/main-logo.svg"
const Main = () => {
  return (
    <main className='w-full h-[500px] font-san'>
      <div className="w-[1232px] h-[557px] ml-[120px] flex">
        <div className="w-[516px] h-[287px] pt-[86.50px]">
          <h1 className="font-medium w-[482px] h-[128px] text-[#8BAC3E] leading-[64px] text-[64px]">Good Food Us Good Mood</h1>
          <p className=" w-[460px] font-normal text-[18px] leading-[29px] text-[#757575] mt-[32px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
          <div className="mt-[32px]">
          <button className='w-[147px] h-[42px] rounded-[100px] bg-[#8BAC3E] font-medium text-sm leading-normal text-[#FFFFFF]'>Daftar Sekarang</button>
            <button className="w-[98px] h-[42px] rounded-[100px] ml-[16px] bg-[#F2F2F2] relative top-[2px] ">About Us</button>
          </div>
        </div>
        <img className="w-[480px] ml-[120px]" src={MainLogo} alt="Main Image" />
      </div>
    </main>
  )
}
export default Main