import React from "react";
import {Props} from "../index";
import CodeOfConductCredit from "../../components/copyright/CodeOfConductCredit";

type CoCProps = {
    children: React.ReactNode;
}
const CoC = (props: CoCProps) => {
    return (
        <h3>
            {props.children}
        </h3>
    );
}

export default function (props: Props) {
    return <div id="wrapper">

        <section className="wrapper style1 align-center">
            <h2>Code of Conduct / Etiske Retningslinjer</h2>
            <div className="inner">
                <section className="inner align-left">
                    <CoC>
                        Alle Teknologihusets deltakere, foredragsholdere, sponsorer, arrangører og frivillige må
                        etterfølge følgende etniske retningslinjer (Code of Conduct):
                    </CoC>
                    <CoC>
                        Teknologihuset håndhever de etiske retningslinjene på alle arrangementer som gjennomføres på
                        Rebel via Teknologihusets avtale. Vi forventer at alle samarbeider med oss om dette for å bidra til å sikre et trygt miljø for alle.
                    </CoC>
                    <CoC>
                        <strong>Den korte versjonen</strong>
                    </CoC>
                    <CoC>
                        Teknologihuset er dedikert til å tilby en trakasseringsfri opplevelse for alle, uavhengig av
                        bakgrunn, kjønn, seksuell orientering, funksjonshemming, fysisk utseende, kroppsstørrelse, rase
                        eller religion. Vi tolererer ikke trakassering av deltakere i noen som helst form. Seksualisert
                        innhold, språk og bilder aksepteres ikke noen som helst steder på Teknologihusets fasiliteter,
                        inkludert på foredrag, workshops, feiringer, fester og sosiale medier (i forbindelse med eventer
                        på Teknologihuset).
                    </CoC>
                    <CoC>
                        Deltakere og arrangører som bryter reglene blir utvist fra Teknologihusets fasiliteter.
                    </CoC>
                    <CoC>
                        <strong>Den lange versjonen</strong>
                    </CoC>
                    <CoC>
                        Trakassering inkluderer støtende verbale kommentarer relatert til kjønn, kjønnsidentitet og uttrykk, seksuell orientering, funksjonshemming, fysisk utseende, kroppsstørrelse, alder, rase, etnisitet eller religion, seksuelle bilder i offentlige rom, bevisst skremming, stalking, følge etter noen, trakasserende fotografering eller opptak, vedvarende forstyrrelser av foredrag eller andre arrangementer, upassende fysisk kontakt, og uønsket seksuell oppmerksomhet.
                    </CoC>
                    <CoC>
                        Deltakere som blir bedt om å stoppe trakasserende oppførsel forventes å følge dette umiddelbart. Hvis en deltaker oppfører seg trakasserende, kan Teknologihuset fritt velge en handling som er passende, inkludert advarsel, anmeldelse og utvisning fra Rebels fasiliteter på bakgrunn av Teknologihusets avtale med Rebel.
                    </CoC>
                    <CoC>
                        Arrangører, foredragsholdere, frivillige og sponsorer er også underlagt de etiske retningslinjene. Det skal ikke brukes seksualiserte bilder, aktiviteter eller annet materiale. Frivillige, standpersonell, arrangører og sponsorer skal ikke bruke seksualiserte klær, uniformer eller kostymer, eller på annen måte skape en seksualisert atmosfære på Teknologihusets fasiliteter.
                    </CoC>
                    <CoC>
                        1. Arrangører representerer sine communities/grupper og skal overholde de etiske retningslinjene. Arrangører er ansvarlig for å
                        påse at alle deltakere på deres arrangementer er trygge. Det aksepteres ikke trakassering, mobbing, eller noen annen form for skadelig oppførsel som skader eller gjør andre deltakere, sponsorer eller arrangører utrygge. Hvis en arrangører eller et community bryter de etiske retningslinjene, kan Teknologihuset fritt velge en handling som er passende, inkludert utestegnelse fra Rebels fasiliteter på bakgrunn av Teknologihusets avtale med Rebel.
                    </CoC>
                    <CoC>
                        2. Deltakere forventes å følge de etiske retningslinjene og ikke trakassere, mobbe, latterliggjøre eller utvise negativ oppførsel som skader eller gjør andre deltakere, arrangører, sponsorer og andre utrygge. Vi forventer at alle deltakere følger reglene på alle Teknologihusets arrangementer og i alle av Teknologihusets fasiliteter inkludert møterom og saler.
                    </CoC>
                    <CoC>
                        <strong>Hva du skal gjøre om du blir utsatt for eller blir vitne til trakassering:</strong>
                    </CoC>
                    <CoC>
                        Hvis du blir trakassert, legger merke til at noen andre blir trakassert, eller har andre bekymringer, vennligst kontakt arrangørene eller Teknologihusets vert umiddelbart. Våre verter er tilstede på dagen og på kvelden når det arrangeres events.
                    </CoC>
                    <CoC>
                        Teknologihuset hjelper gjerne deltakere med å kontakte sikkerhetsvakter eller politi, gi følge eller på annen måte bistå de som opplever trakassering for å føle seg trygge på Teknologihuset.
                    </CoC>
                    <CoC>
                        Retningslinjene gjelder alle events som kjøres i lokalene som disponeres av Teknologihuset via avtalen med Rebel.
                    </CoC>
                </section>
                <CodeOfConductCredit />
            </div>
        </section>

    </div>
}