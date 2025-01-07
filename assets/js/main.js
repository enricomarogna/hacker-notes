Vue.component('tools-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <card 
                v-for="tool in tools" 
                :key="tool.title" 
                :image="tool.image" 
                :title="tool.title" 
                :link="tool.link" 
                :description="tool.description">
            </card>
        </div>
    </div>
    `,
    data() {
        return {
            tools: [
                { image: './assets/img/gtfobins.webp', title: 'GTFOBins', link: 'https://gtfobins.github.io/', description: 'GTFOBins è una collezione di eseguibili Unix che possono essere sfruttati per bypassare la sicurezza.' },
                { image: './assets/img/lolbas.webp', title: 'LOLBas', link: 'https://lolbas-project.github.io/', description: 'LOLBas è un progetto che raccoglie i binari di Windows utilizzabili per fini malevoli.' },
                { image: './assets/img/loobins.png', title: 'LOOBins', link: 'https://www.loobins.io/', description: 'Progettato per fornire informazioni dettagliate sui file binari di macOS e su come possono essere utilizzati per scopi dannosi.' },
                { image: './assets/img/wadcoms.webp', title: 'WADComs', link: 'https://wadcoms.github.io/', description: 'WADComs è un insieme di comandi per esplorare funzionalità sconosciute di vari software.' },
                { image: './assets/img/reverse-shell.webp', title: 'Reverse Shell', link: 'https://www.revshells.com/', description: 'Reverse Shell fornisce vari comandi per ottenere una shell inversa su una macchina bersaglio.' },
                { image: './assets/img/exploit-db.webp', title: 'Exploit Database', link: 'https://www.exploit-db.com/', description: 'Exploit Database è un archivio di exploit pubblici e di vulnerabilità di sicurezza.' },
                { image: './assets/img/explain-shell.webp', title: 'Explain Shell', link: 'https://www.explainshell.com/', description: 'Explain Shell spiega ogni parte di un comando shell per comprendere meglio il suo funzionamento.' },
                { image: './assets/img/sploitus.png', title: 'Sploitus', link: 'https://sploitus.com/', description: 'Sploitus è un motore di ricerca per exploit e vulnerabilità di sicurezza.' },
                { image: './assets/img/loldrivers.png', title: 'LolDrivers', link: 'https://www.loldrivers.io/', description: 'LolDrivers è una raccolta di driver Windows vulnerabili per scopi di ricerca e test.' },
                { image: './assets/img/redteam-tools.png', title: 'RedTeam Tools', link: 'https://github.com/A-poc/RedTeam-Tools', description: 'Questo repository github contiene una raccolta di oltre 130 strumenti e risorse che possono essere utili per le attività di red teaming.' },
                { image: './assets/img/lots-project.png', title: 'LOTS Project', link: 'https://lots-project.com/', description: 'Elenco di siti utilizzati per condurre attacchi di phishing, C&C, esfiltrazione e download per eludere il rilevamento.' },
                { image: './assets/img/cyberchef.png', title: 'CyberChef', link: 'https://gchq.github.io/CyberChef/', description: 'CyberChef è uno strumento per la decodifica, l\'analisi e la generazione di dati.' },
                { image: './assets/img/ghost-pack.jpg', title: 'GhostPack', link: 'https://github.com/r3motecontrol/Ghostpack-CompiledBinaries', description: 'Lista di binari compilati di GhostPack, un insieme di strumenti per la sicurezza di Windows.' },
                { image: './assets/img/payloadsallthethings.png', title: 'Payloads All The Things', link: 'https://github.com/swisskyrepo/PayloadsAllTheThings', description: 'Un elenco di payload e bypass utili per la sicurezza delle applicazioni Web.' },
                { image: './assets/img/wintools.jpg', title: 'WinTools', link: './assets/misc/wintools.zip' , description: 'Contiene gli eseguibili di alcuni tool utili per il pentesting su Windows.' },
                // aggiungi altri strumenti qui...
            ]
        };
    }
});

Vue.component('wiki-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <card 
                v-for="wiki in wikis" 
                :key="wiki.title" 
                :image="wiki.image" 
                :title="wiki.title" 
                :link="wiki.link" 
                :description="wiki.description">
            </card>
        </div>
    </div>
    `,
    data() {
        return {
            wikis: [
                { image: './assets/img/hacktricks.avif', title: 'HackTricks', link: 'https://book.hacktricks.xyz/', description: 'Hack tricks è una wiki con numerosi trucchi e tecniche per il pentesting.' },
                { image: './assets/img/exploit-notes.webp', title: 'Exploit Notes', link: 'https://exploit-notes.hdks.org/', description: 'Exploit Notes raccoglie appunti e risorse per sfruttare le vulnerabilità.' },
                { image: './assets/img/oscp-repo.webp', title: 'OSCPRepo', link: 'https://github.com/rewardone/OSCPRepo', description: 'OSCPRepo è un repository con appunti e risorse per la certificazione OSCP.' },
                { image: './assets/img/pentest-everything.webp', title: 'Pentest Everything', link: 'https://viperone.gitbook.io/pentest-everything/', description: 'Pentest Everything è una guida completa per il pentesting.' },
                { image: './assets/img/thehacker-recipes.svg', title: 'The Hacker Recipes', link: 'https://www.thehacker.recipes/', description: 'The Hacker Recipes è una raccolta di ricette per hacker, con comandi e script utili.' },
                { image: './assets/img/hacktips.jpg', title: 'Hacktips', link: 'https://hacktips.it/', description: 'Articoli sul Penetration Test, sui Malware, sulla Privacy e in generale tutto ciò che concerne la Sicurezza Informatica.' },
                { image: './assets/img/powersploit.png', title: 'PowerSploit', link: 'https://powersploit.readthedocs.io/en/latest/', description: 'Raccolta di moduli Microsoft PowerShell utilizzabili dai penetration tester durante tutte le fasi di una valutazione.' },
                // aggiungi altri wiki qui...
            ]
        };
    }
});

Vue.component('password-crackers-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <card 
                v-for="cracker in crackers" 
                :key="cracker.title" 
                :image="cracker.image" 
                :title="cracker.title" 
                :link="cracker.link" 
                :description="cracker.description">
            </card>
        </div>
    </div>
    `,
    data() {
        return {
            crackers: [
                { image: './assets/img/weakpass.webp', title: 'Weakpass', link: 'https://weakpass.com/', description: 'Weakpass è un sito che fornisce dizionari di password comuni per il cracking.' },
                { image: './assets/img/hashkiller.webp', title: 'HashKiller', link: 'https://hashkiller.io/listmanager/', description: 'HashKiller è un servizio per il cracking di hash tramite dizionari e tabelle rainbow.' },
                { image: './assets/img/cmd5.png', title: 'CMD5', link: 'https://www.cmd5.org/', description: 'CMD5 è un servizio online per il cracking di hash e la decodifica di password.' },
                { image: './assets/img/online-hask-crack.webp', title: 'Online Hash Crack', link: 'https://www.onlinehashcrack.com/', description: 'Online Hash Crack è un servizio di cracking di hash online utilizzando potenti server.' },
                { image: './assets/img/crackstation.webp', title: 'Crack Station', link: 'https://crackstation.net/', description: 'Crack Station è un servizio di cracking di hash gratuito con un database vasto.' },
                { image: './assets/img/passwordrecovery.webp', title: 'Password Recovery', link: 'https://passwordrecovery.io/', description: 'Password Recovery offre servizi di recupero password online.' },
                { image: './assets/img/md5-decrypt.webp', title: 'MD5 Decrypt', link: 'https://md5decrypt.net/en/', description: 'MD5 Decrypt offre servizi di decrittazione di hash MD5 online.' },
                { image: './assets/img/lazagne-project.jpg', title: 'LaZagne', link: 'https://github.com/AlessandroZ/LaZagne', description: 'Applicazione open source utile per recuperare le password memorizzate su un computer locale.' },
                // aggiungi altri cracker qui...
            ]
        };
    }
});

Vue.component('misc-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <card 
                v-for="misc in miscs" 
                :key="misc.title" 
                :image="misc.image" 
                :title="misc.title" 
                :link="misc.link" 
                :description="misc.description">
            </card>
        </div>
    </div>
    `,
    data() {
        return {
            miscs: [
                { image: './assets/img/exploit-notes-hdks.webp', title: 'Security Links', link: 'https://security-links.hdks.org/', description: 'Security Links è una raccolta di collegamenti utili per la sicurezza informatica.' },
                { image: './assets/img/open-security-training.webp', title: 'Open Security Training', link: 'https://opensecuritytraining.info/', description: 'Open Security Training è un sito che offre corsi di sicurezza informatica gratuiti e open source.' },
                { image: './assets/img/offsec.webp', title: 'Offsec', link: 'https://portal.offsec.com/', description: 'OffSec (Offensive Security) è una risorsa di riferimento per la formazione e la certificazione in sicurezza informatica.' },
                { image: './assets/img/SecLists.png', title: 'SecLists', link: 'https://github.com/danielmiessler/SecLists/', description: 'Raccolta di liste. Includono nomi utente, password, URL, modelli di dati sensibili, payload fuzz, shell web e molto altro.' },
                // { image: './assets/img/cheat-sheet.png', title: 'Cheat Sheets', link: 'https://www.cheat-sheets.org/', description: 'Tutti i cheat sheets, i riassunti e le schede di consultazione rapida in un\'unica pagina.' },
                // aggiungi altri misc qui...
            ]
        };
    }
});

Vue.component('cheet-sheet-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <ul class="hn-list-group hn-list-group-flush">
                <cheetsheet-section
                    v-for="cheetsheet in cheetsheets"
                    :key="cheetsheet.title"
                    :title="cheetsheet.title"
                    :link="cheetsheet.link">
                </cheetsheet-section>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            cheetsheets: [
                { title: 'AwesomePentest CheatSheets', link: 'https://github.com/ByteSnipers/awesome-pentest-cheat-sheets' },
                { title: 'Windows Post Exploitation', link: 'https://github.com/emilyanncr/Windows-Post-Exploitation' },
                { title: 'HarmJ0y CheatSheets', link: 'https://github.com/HarmJ0y/CheatSheets' },
                { title: 'CheatSheets.org', link: 'https://www.cheat-sheets.org/' },
            ]
        };
    }
});

Vue.component('link-utili-section', {
    template: `
    <div class="hn-container-fluid">
        <div class="hn-row">
            <ul class="hn-list-group hn-list-group-flush">
                <linksutili-section
                    v-for="link in links"
                    :key="link.title"
                    :title="link.title"
                    :link="link.link">
                </linksutili-section>
            </ul>
        </div>
    </div>
    `,
    data() {
        return {
            links: [
                { title: 'Hack The Box', link: 'https://www.hackthebox.eu/' },
                { title: 'Try Hack Me', link: 'https://tryhackme.com/' },
                { title: 'VulnHub', link: 'https://www.vulnhub.com/' },
                { title: 'Over The Wire', link: 'https://overthewire.org/wargames/' },
                { title: 'PentesterLab', link: 'https://pentesterlab.com/' },
                { title: 'Root-Me', link: 'https://www.root-me.org/' },
                { title: 'Hacker101', link: 'https://www.hacker101.com/' },
                { title: 'OWASP', link: 'https://owasp.org/' },
                { title: 'SANS', link: 'https://www.sans.org/' },
                { title: 'The Journey to Try Harder', link: 'https://www.netsecfocus.com/oscp/2021/05/06/The_Journey_to_Try_Harder-_TJnull-s_Preparation_Guide_for_PEN-200_PWK_OSCP_2.0.html#section-15-privilege-escalation' },
                { title: 'Toolies', link: 'https://github.com/expl0itabl3/Toolies' },
                { title: 'OSCP CheetSheet', link: 'https://github.com/Sp4c3Tr4v3l3r/OSCP/tree/main' },
                { title: 'Offsec Certification Resources', link: 'https://github.com/V-i-x-x/Offsec-Certification-Resources/blob/main/OSCP%20Resources%20(2024).md' },
                { title: 'Windows - Privilege Escalation', link: 'https://swisskyrepo.github.io/InternalAllTheThings/redteam/escalation/windows-privilege-escalation/#summary' },
            ]
        };
    }
});

Vue.component('footer-section', {
    template: `
    <footer>
        <p>
            Made with <span><i class="fa-solid fa-heart"></i></span> by momphucker - <a href="https://github.com/enricomarogna/hacker-notes" target="_blank"><i class="fa-brands fa-github"></i></a>
        </p>
    </footer>
    `
});

Vue.component('card', {
    props: ['image', 'title', 'link', 'description'],
    template: `
    <div class="hn-card">
        <div class="hn-card-inner">
            <div class="hn-card-front">
                <div class="hn-img" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
                <div class="hn-title">
                    <a :href="link" target="_blank" class="hn-stretched-link">
                        <h3>{{ title }}</h3>
                    </a>
                </div>
            </div>
            <div class="hn-card-back">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
    `
});

Vue.component('cheetsheet-section', {
    props: ['title', 'link'],
    template: `
        <li class="nh-list-group nh-list-group-item">
            <a :href="link" target="_blank" class="hn-list-group-item hn-list-group-item-action">{{ title }}</a>
        </li>
    `
});

Vue.component('linksutili-section', {
    props: ['title', 'link'],
    template: `
        <li class="nh-list-group nh-list-group-item">
            <a :href="link" target="_blank" class="hn-list-group-item hn-list-group-item-action">{{ title }}</a>
        </li>
    `
});

new Vue({
    el: '#app'
});
