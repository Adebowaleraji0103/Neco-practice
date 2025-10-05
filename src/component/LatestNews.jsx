const LatestNews = () => {
  const news = [
    {
      id: 1,
      tittle:
        "2025 SSCE External Registration Guidelines and Examination Timetable Released",
      content:
        "We are pleased to inform all candidates and stakeholders that the 2025 SSCE External Registration...",
    },
    {
      id: 2,
      tittle: "NECO Updates 2024 SSCE Internal Timetable",
      content: "The National Examination Council (NECO) has...",
    },
    {
      id: 3,
      tittle: "NECO DIGITALIZES RECRUITMENT OF EXAMINATION SUPERVISORS",
      content:
        "The National Examinations Council (NECO) has digitalized the recruitment process for Examination ...",
    },
    {
      id: 4,
      tittle: "NECO 2023 Gifted Examination Postponed",
      content:
        "The National Examinations Council (NECO) has recently made an anno...",
    },
    {
      id: 5,
      tittle: "NECO 2023 SSCE Internal Registration Deadline",
      content:
        "The National Examinations Council (NECO) has officially announced ...",
    },
    {
      id: 6,
      tittle: "NATIONAL EXAMINATIONS COUNCIL (NECO) PUBLIC NOTICE",
      content:
        "REQUEST FOR RE-PRINT OF CERTIFICATE The National Examinations Council (NE...",
    },
    {
      id: 7,
      tittle:
        "NECO HAS NOT EXTENDED CLOSING DATE FOR 2024 SSCE INTERNAL REGISTRATION ",
      content:
        "The National Examinations Council (NECO) has not extended the closing date for the 2024 Senior Sc...",
    },
    {
      id: 8,
      tittle: "HOW TO APPLY FOR SCRIPT(S) REMARKING",
      content: "NOTE: Candidates must apply within 16 months after the...",
    },
    {
      id: 9,
      tittle: "NECO 2023 NCEE Examination Rescheduled",
      content:
        "The National Examinations Council (NECO) recently announced that t...",
    },
    {
      id: 10,
      tittle: "2023 NCEE and Gifted Exams Rescheduled",
      content:
        "The National Examinations Council (NECO) has postponed the National Common Entrance Examination (...",
    },
  ];

  return (
    <div className="padding mb-[3rem] flex flex-col gap-[2rem]">
      <h1 className="font-bold text-[27px] text-center md:text-[34px]">
        Latest News
      </h1>

      <div className="grid md:grid-cols-2 gap-9">
        {news.map((news, index) => (
          <div
            key={index}
            className="border border-[#054C0F] rounded-[9px] py-10 px-6 flex gap-3"
          >
            <p className="border rounded-[4px] h-fit w-fit px-3 py-2">{news.id}</p>
            <div className="flex flex-col gap-1">
              <a href="#" className="text-[#054C0F] font-semibold text-[16px] md:text-[18px]">
                {news.tittle}
              </a>
              <p>{news.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
