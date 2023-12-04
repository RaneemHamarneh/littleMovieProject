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
      linkedin: "LINK_TO_HAYDER_LINKEDIN",
    },
    {
      name: "Lina",
      github: "https://github.com/Lina-zamil",
      linkedin: "LINK_TO_LINA_LINKEDIN",
    },
  ]

  return (
    <footer className="bg-[#000] py-4 text-center absolute bottom-0 w-full">
      <div className="flex justify-center">
        {members.map((member, index) => (
          <div key={index} className="mx-4">
            <p className="text-lg font-semibold text-white">{member.name}</p>
            <div className="flex justify-center tracking-wide">
              <a
                href={member.github}
                className="mr-2 text-blue-600 hover:underline"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                className="text-blue-600 hover:underline"
                target="_blank"
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
