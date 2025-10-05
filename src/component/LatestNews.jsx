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
      tittle: "",
      content: "The National Examination Council (NECO) has...",
    },
    {
      id: 3,
      tittle:
        "2025 SSCE External Registration Guidelines and Examination Timetable Released",
      content:
        "We are pleased to inform all candidates and stakeholders that the 2025 SSCE External Registration...",
    },
    {
      id: 4,
      tittle: "",
      content: "The National Examination Council (NECO) has...",
    },
    {
      id: 5,
      tittle:
        "2025 SSCE External Registration Guidelines and Examination Timetable Released",
      content:
        "We are pleased to inform all candidates and stakeholders that the 2025 SSCE External Registration...",
    },
    {
      id: 6,
      tittle: "",
      content: "The National Examination Council (NECO) has...",
    },
    {
      id: 7,
      tittle:
        "2025 SSCE External Registration Guidelines and Examination Timetable Released",
      content:
        "We are pleased to inform all candidates and stakeholders that the 2025 SSCE External Registration...",
    },
    {
      id: 8,
      tittle: "",
      content: "The National Examination Council (NECO) has...",
    },
  ];

  return (
    <div>
      <h1>Latest News</h1>

      <div className="grid md:grid-cols-2 gap-9">
        {news.map((news, index) => (
          <ul key={index} className="">
            <li className="text-[#054C0F]">
              {news.tittle}
              {news.content}
            </li>
            {/* <li className="text-gray-600"></li> */}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
