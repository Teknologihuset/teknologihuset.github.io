import React from "react";
import {Props} from "../index";
import Content from "../../components/content/Content";

export default function (props: Props) {
    return <div id="wrapper">

        <section className="wrapper style1 align-center">
            <h2>Velkommen til Teknologihuset</h2>
            <div className="inner">
                <div id="about_th" className="index align-left">
                    <h3>Moderne fasiliteter til alle community-grupper</h3>
                    <section>
                        <h4>Store og små saler og møterom i alle størrelser</h4>
                        <Content>
                            <p>
                                Teknologihuset samarbeider med Rebel, som er den ledende tilbyderen av møteplasser i
                                Oslo. Vi er stolte over å kunne tilby alle som vil dele kunnskap flere typer
                                møtesaler og av alle typer størrelser. Er meetupen eller arrangementet ditt åpen og
                                tilgjengelig for alle, betaler du ingenting og kan bruke møtesalene og møterommene
                                helt gratis. Dersom du vil arrangere meetups med publikum, kan du booke møtesaler.
                                Skal du arrangere styre- eller gruppe-møter kan du booke en av de mange møterommene.
                            </p>
                        </Content>
                    </section>
                    <section>
                        <h4>Teknologihusets vert</h4>
                        <Content>
                            <p>
                                Teknologihuset har fått på plass ordningen med en vert som følger opp deg og ditt
                                arrangement. Hjelp med matbestillingen? Noe spesielt utstyr du trenger? Plass på
                                Skråplanet?
                                Noe annet? Vår vert hjelper deg og setter deg i kontakt med de rette folkene på
                                Rebel.
                            </p>
                        </Content>
                    </section>
                    <section>
                        <h4>Forutsigbare matbestillinger</h4>
                        <Content>
                            <p>
                                Teknologihuset har forhandlet community-vennlige priser for blant annet pizza. Du
                                vil kunne
                                bestille pizza fra kroner 157 pr. stykk. Til sammenligning koster i dag pizza fra
                                eksterne
                                leverandører det dobbelte. Vi hjelper deg gjerne med å gjøre bestillingen så
                                forutsigbar og
                                trygg som mulig.
                            </p>
                        </Content>
                    </section>
                    <section>
                        <h4>Nettverk</h4>
                        <Content>
                            <p>
                                Vi er stolte over å ha muligheten til å kunne sette deg i kontakt med landets
                                fremste
                                eksperter innen rekke ulike emner og temaer innen teknologi. Ta kontakt og se om det
                                er noe
                                vi kan støtte deg med.
                            </p>
                        </Content>
                    </section>
                    <section>
                        <h4>Oppstartshjelp til nye communities</h4>
                        <Content>
                            <p>

                                Teknologihuset drives av teknologer som selv arrangerer åpne meetups. Vi er en gjeng
                                med
                                over tjue års erfaring med lokale og internasjonale konferanser, community og
                                frivillig
                                arbeid. Ta kontakt om du lurer på hvordan du kan etablere communities, meetups,
                                konferanser
                                m.m.
                            </p>
                        </Content>
                    </section>
                </div>
            </div>
        </section>

    </div>
}