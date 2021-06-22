import Image from 'next/image';
import ICard from '../interfaces/ICard';

export const Card = (props: ICard) => {

    return (
        <article className="flex flex-col bg-white text-gray-900 rounded-t-lg rounded-b-lg">
            <div>
                <Image className="object-cover rounded-t-md" src={props.background} alt={props.name} />
            </div>

            <div className="md:p-6 p-4 flex flex-col justify-center items-center md:space-y-4 space-y-2">
                <h4 className="font-Montserrat-Bold md:text-2xl">{ props.name }</h4>
                <p className="font-Montserrat-Light">{props.description}</p>
                {
                    props.technologies ?
                        <div className="flex justify-center items-center space-x-2">
                            {
                                props.technologies.map((tech, key) => {
                                    return <p className="p-2 bg-gray-900 text-white font-Montserrat-Light rounded-lg" key={key}>
                                        {tech}
                                    </p>
                                })
                            }
                        </div> : ''
                }
                <a href={props.url} target="_blank" className="md:w-1/2 bg-yellow-500 font-Montserrat-Bold text-white p-2 rounded-md hover:bg-white border-white hover:border-yellow-500 hover:text-gray-900 border transition-all duration-150 delay-150" rel="noreferrer">
                    watch it!
                </a>
            </div>


        </article>
    );
}