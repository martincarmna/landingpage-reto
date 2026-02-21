import { ContactItem } from "./contac-item"

interface ContactInformation{
    text: string,
    iconUrl: string;
    alt: string;
}
const contactIformation: ContactInformation []= [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam sapiente cumque aut fuga officiis libero magnam, officia tempore ab unde, natus beatae sint dolorum blanditiis,Doloremque minus illum pariatur adipisci!',
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone"
  }
]

export const Footer = () => {
  return (
    <footer className="pt-65 pb-75">
        <img src="/images/logo.svg" alt="logo" />
        <div className="flex items-center gap-6">
            <img src="/images/icon-location.svg" alt="location" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sapiente cumque aut fuga officiis libero magnam, 
                officia tempore ab unde, 
                natus beatae sint dolorum blanditiis.
                 Doloremque minus illum pariatur adipisci!</p>
        </div>
        <ContactItem text="+55 241-140-48-1" 
        iconUrl="/images/icon-location.svg" alt="icon phone" />

    </footer>
  )
}
