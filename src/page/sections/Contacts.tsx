import CardCont from '../components/CardContacts'
import localizacaoLogo from '../../assets/img/icons/localizacao.png'
import mobileLogo from '../../assets/img/icons/mobile.png'
import websiteLogo from '../../assets/img/icons/website.png'
import emailLogo from '../../assets/img/icons/email-contato.png'
import SectionTitle from '../components/SectionTitle'

const Contacts = () => {
  return (
    <section className="bg-bgsecondary spaceSection" id="Contatos">
      <SectionTitle title={'<Contatos>'} />

      <div
        className="center flex justify-center py-[3.75rem] gap-10 flex-wrap"
        data-aos="fade-down"
      >
        <CardCont
          icon={localizacaoLogo}
          title="Localização"
          description="Francisco Badaró, MG"
        ></CardCont>

        <CardCont
          icon={mobileLogo}
          title="tel e whatsapp"
          description="33 9 98364168"
        ></CardCont>

        <CardCont
          icon={websiteLogo}
          title="web site"
          description="www.guixavier.com"
        ></CardCont>

        <CardCont
          icon={emailLogo}
          title="e-mail"
          description="guixavier.dev@gmail.com"
        ></CardCont>
      </div>
    </section>
  )
}

export default Contacts
