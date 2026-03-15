import "./Hero.css"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="hero">
      <div className="info-perfil">
        <p className="saudacao">Olá, Kauê A. Aqui 👋</p>
        <h1><span>Front</span>end<br></br>Developer</h1>
        <p className="descricao">Desenvolvo interfaces modernas, responsivas e focadas em experiência do usuário.</p>
        <span>
            <a href={`https://wa.me/89999999999`} className="entre-em-contato" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="contato"/> Entre em Contato</a>
            <a href="" className="ver-projetos">Ver Projetos</a>
        </span> 
      </div>

      <div className="grade-projetos">
        <div className="img"></div>
        <a href="https://www.linkedin.com/in/kau%C3%AA-alves-2122b8267/" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/kaue.alves.s/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/Kaue-Alves" target="_blank" className="github" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </section> 
  )
}
