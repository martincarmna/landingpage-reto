interface Features{
    title: string;
    description: string;
    iconUrl: string;}
const features: Features[] = [
    {
        title: "Access your files, anywhere",
        description:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl :'/images/icon-access-anywhere.svg'
    },
    {
        title: "Access your files, anywhere",
        description:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl:'/images/icon-access-anywhere.svg'
    },
    {
        title: "Access your files, anywhere",
        description:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        iconUrl:'/images/icon-access-anywhere.svg'
    }

]
export const Features = () => {
  return (
    <div className="flex flex-col gap-20 mt-140px">{
        features.map(({title, description, iconUrl}: Features) => (
           <div key={title} className="flex flex-col items-center text-center">
            <img src={iconUrl} alt={title} />
            <div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p>{description}</p>
            </div>
           </div>
        ))
        }</div>
  )
}
