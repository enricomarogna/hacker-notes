Vue.component('tools-section', {
    template: `
    <div class="container-fluid">
        <div class="row">
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
                { image: './assets/img/wadcoms.webp', title: 'WADComs', link: 'https://wadcoms.github.io/', description: 'WADComs è un insieme di comandi per esplorare funzionalità sconosciute di vari software.' },
                { image: './assets/img/reverse-shell.webp', title: 'Reverse Shell', link: 'https://www.revshells.com/', description: 'Reverse Shell fornisce vari comandi per ottenere una shell inversa su una macchina bersaglio.' },
                { image: './assets/img/exploit-db.webp', title: 'Exploit Database', link: 'https://www.exploit-db.com/', description: 'Exploit Database è un archivio di exploit pubblici e di vulnerabilità di sicurezza.' },
                { image: './assets/img/explain-shell.webp', title: 'Explain Shell', link: 'https://www.explainshell.com/', description: 'Explain Shell spiega ogni parte di un comando shell per comprendere meglio il suo funzionamento.' },
                // aggiungi altri strumenti qui...
            ]
        };
    }
});

Vue.component('wiki-section', {
    template: `
    <div class="container-fluid">
        <div class="row">
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
                // aggiungi altri wiki qui...
            ]
        };
    }
});

Vue.component('password-crackers-section', {
    template: `
    <div class="container-fluid">
        <div class="row">
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
                // aggiungi altri cracker qui...
            ]
        };
    }
});

Vue.component('misc-section', {
    template: `
    <div class="container-fluid">
        <div class="row">
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
                // aggiungi altri misc qui...
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
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <div class="img" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
                <div class="title">
                    <a :href="link" target="_blank" class="stretched-link">
                        <h3>{{ title }}</h3>
                    </a>
                </div>
            </div>
            <div class="card-back">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
    `
});

new Vue({
    el: '#app'
});
