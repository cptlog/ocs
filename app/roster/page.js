import roster from './roster.json'

/*const Group = ({ group }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {group.members.map(member =>
                <div key={member.name} className='bg-stone-800'>

                    <header className='h-36 w-full' style={{
                        backgroundImage: `url(/ocs/img/portrait_${member.name.toLowerCase()}.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                        <div className='flex gap-2 p-2 drop-shadow-md font-bold w-full bg-gradient-to-b from-stone-800 break-words flex-wrap'>
                            <div>
                                {member.name}
                            </div>
                            <div className='grow text-right'>
                                {member.position}
                            </div>
                        </div>
                    </header>

                    <div className='grow h-40 p-4 overflow-auto'>
                        <p>{member.description}</p>
                    </div>

                </div>
            )}

        </div>
    )
}*/

const Group = ({ group }) => {
    return (
        <div className='flex flex-wrap gap-4'>

            {group.members.map(member =>
                <div key={member.name} className='bg-stone-800 w-56 md:w-64 lg:w-80 xl:w-96'>

                    <header className='w-full h-40' style={{
                        backgroundImage: `url(/ocs/img/portrait_${member.name.toLowerCase()}.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                        <div className='flex gap-2 p-2 drop-shadow-md font-bold w-full bg-gradient-to-b from-stone-800 break-words flex-wrap'>
                            <div>
                                {member.name}
                            </div>
                            <div className='grow text-right'>
                                {member.position}
                            </div>
                        </div>
                    </header>

                    <div className='grow h-48 p-4 overflow-auto'>
                        <p>{member.description}</p>
                    </div>

                </div>
            )}

        </div>
    )
}

const Locales = ({ locales }) => {
    return (
        <div className='flex flex-col gap-4'>
            {locales.map(locale =>

                <div key={locale.name} className='flex flex-col gap-4 mt-8'>

                    <h2>{locale.name}</h2>

                    {locale.groups.map(group =>
                        <div key={group.name} className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-4 items-center'>
                                <h3>{group.name}</h3>
                                <p>{group.description}</p>
                            </div>
                            <Group group={group} />
                        </div>
                    )}

                </div>
            )}
        </div>
    )
}

export default function Roster() {
    return (
        <main className="flex flex-col gap-4 p-4 m-auto">
            
            <h1>Roster</h1>
            <p>Directory of characters. Under construction.</p>

            <Locales locales={roster.locales} />

        </main>
    )
}