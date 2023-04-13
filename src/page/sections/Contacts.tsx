import CardCont from '../components/CardCont';
import localizacaoLogo from '../../assets/img/icons/localizacao.png';
import mobileLogo from '../../assets/img/icons/mobile.png';
import websiteLogo from '../../assets/img/icons/website.png';
import emailLogo from '../../assets/img/icons/email-contato.png';

const Contacts = () => {
  return (
    <section className='bg-bgsecondary spaceSection'>
      <h1 className='title-section '>{'<contatos>'}</h1>
      <div className='center flex justify-center py-[3.75rem] gap-10 flex-wrap'>
        <CardCont
          icon={localizacaoLogo}
          title='Localização'
          description='Francisco Badaró, MG'
        ></CardCont>

        <CardCont
          icon={mobileLogo}
          title='tel e whatsapp'
          description='33 9 98364168'
        ></CardCont>

        <CardCont
          icon={websiteLogo}
          title='web site'
          description='www.guixavier.dev'
        ></CardCont>

        <CardCont
          icon={emailLogo}
          title='e-mail'
          description='guixavier.dev@gmail.com'
        ></CardCont>
      </div>
    </section>
  );
};

export default Contacts;
