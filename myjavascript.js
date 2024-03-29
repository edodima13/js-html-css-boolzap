app = new Vue({
    el: "#root",
    data: {
        newMessage : "",
        search:"",
        activeContact: null,
        contacts: [
            {
            name: 'Michele',
            avatar: 'img/avatar-01.png',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
            ],
            },
            {
            name: 'Fabio',
            avatar: 'img/avatar-02.png',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'img/avatar-03.png',
            visible: true,
            messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
                }
            ],
            },
            {
            name: 'Luisa',
            avatar: 'img/avatar-04.png',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
            ],
            },
        ], 
    }, 
    methods : {
        selectContact : function(contact){
            this.activeContact = contact
            console.log(this.activeContact)
        }, 
        invia : function(){
            const message = {
                date : "10/01/2020 15:30:55",
                text : this.newMessage,
                status : "sent"
            }
            this.activeContact.messages.push( message )
            this.newMessage="";
            setTimeout(this.reply,1000)
        },
        reply : function(){
            const message = {
                date : "10/01/2020 15:30:55",
                text : "ok",
                status : "received"
            }
            this.activeContact.messages.push( message )
        },
        filter : function(){
            this.contacts.forEach(element => {
                //console.log( this.search )
                if ( element.name.toLowerCase().includes(this.search.toLowerCase())){
                    element.visible = true
                } else {
                    element.visible = false
                }
            });
        }
    },
    created(){
        this.selectContact(this.contacts[0])
    }
    })



