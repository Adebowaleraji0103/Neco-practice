const Verification = () => {
  return (
    <div className="mb-[3rem] flex flex-col justify-center gap-[2rem] py-[7rem] px-[1rem] md:px-[3.5rem] text-center bg-[#054C0F] text-white font-semibold mt-[4rem] md:text-[20px] md:flex-row md:gap-[4rem] md:text-start md:items-center">
      <h2 className="font-bold text-[28px] md:text-[42px] md:w-[50%] md:px-10">e-Verify Online Result Verification/Confirmation Solution</h2>
      <div className="flex flex-col items-center gap-5 px-[1.5rem] md:w-[40%] md:text-start md:items-start">
        <span>This is an online Result Verification/Confirmation system designed to perform dual result verification purposes viz, the Instant Result Verification and Institutional Bulk Verification. It guarantees instant authentication of academic or basic information about prospective candidates for admission and employment into academic institutions and workplaces respectively.</span>
        <button className="bg-white text-[#054C0F] w-fit py-5 px-9 rounded-[6px] cursor-pointer">
          <a href="#">Apply here</a>
          </button>
      </div>
    </div>
  );
};

export default Verification;
