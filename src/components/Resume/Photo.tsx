import ResumePhoto from "/resume/ResumePhoto.png"

function Photo() {
  return (
    <article
      className="block"
    >
      <img
        src={ResumePhoto}
        className="w-full max-w-96 m-auto rounded-xl"
        alt="Alejandro Fasanello"
      /> <br />
      <span className="block text-xl min-[400px]:text-3xl md:text-base lg:text-2xl xl:text-3xl font-mono text-center -mt-6">Alejandro<br />Fasanello</span>
    </article>
  )
}

export default Photo