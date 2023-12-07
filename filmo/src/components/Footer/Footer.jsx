import React from "react"

function Footer() {
  const members = [
    {
      name: "Raneem",
      github: "https://github.com/RaneemHamarneh",
      linkedin: "https://www.linkedin.com/in/raneem-alhamarneh/",
    },
    {
      name: "Hayder",
      github: "https://github.com/Hayder000",
      linkedin: "https://www.linkedin.com/in/hayder-profile-url",
    },
    {
      name: "Lina",
      github: "https://github.com/Lina-zamil",
      linkedin: "https://www.linkedin.com/in/lina-profile-url",
    },
  ]

  return (
    <footer className=" bg-cyan-700 py-4 text-center flex flex-col justify-between ">
      <div className="flex justify-center select-none ">
        {members.map((member, index) => (
          <div key={index} className="mx-4">
            <p className="text-lg font-semibold text-white">{member.name}</p>
            <div className="flex justify-center tracking-wide">
              <a
                href={member.github}
                className="mr-2 text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                className="text-blue-300 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer