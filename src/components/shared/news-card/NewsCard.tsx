import { BaseTag } from "@/components/ui";

interface NewsCardProps {
    title:string;
    image:string;
    tags:Array<string>,
}

export const  NewsCard = (props: Partial<NewsCardProps>) => {

    const tags = ['Category','Source']

  return (
        <>
           <div className="border p-3 rounded-xl" data-testid="news-card">
                <div className="grid grid-cols-12 gap-x-4">
                    <img className="h-full w-full object-cover rounded-xl col-span-3" src="https://images.pexels.com/photos/20189629/pexels-photo-20189629/free-photo-of-a-vase-of-yellow-tulips-sits-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
                    <div className="col-span-9">
                        <h2 className="font-semibold text-2xl">
                            This is best news hehl
                        </h2>
                        <div className="flex gap-x-2 mt-1">
                            {
                                tags.map((tag:string,index:number)=>{
                                    return(
                                        <>
                                            <BaseTag title={tag} color="secondary" key={index} />
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus laborum autem nobis, sapiente optio, assumenda eius consequatur accusamus harum et quo minima molestias libero vel illum quasi animi. Aut.
                                Ipsa pariatur repellat perspiciatis vel similique possimus,assumenda eius consequatur accusamus harum et quo minima molestias libero vel illum quasi animi, tenetur rem illum consequatur praesentium libero nulla, blanditiis autem harum voluptatibus doloremque laboriosam architecto? Sapiente, vitae aut sunt ipsum iusto animi cum autem?
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </>
  );
}
