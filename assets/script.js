document.addEventListener('DOMContentLoaded', function () {

        // Sélection des éléments du DOM

    // Boutons
    let b_aqua = document.getElementById('b_aqua');
    let b_won = document.getElementById('b_won');
    let b_pac = document.getElementById('b_pac');
    let b_dead = document.getElementById('b_dead');
    let b_aste = document.getElementById('b_aste');
    let b_dra = document.getElementById('b_dra');
    let b_blac = document.getElementById('b_blac');
    let b_fast = document.getElementById('b_fast');

    // ID des Images
    var img_aqua = document.getElementById('img_aqua');
    var img_won = document.getElementById('img_won');
    var img_pac = document.getElementById('img_pac');
    var img_dead = document.getElementById('img_dead');
    var img_aste = document.getElementById('img_aste');
    var img_dra = document.getElementById('img_dra');
    var img_blac = document.getElementById('img_blac');
    var img_fast = document.getElementById('img_fast');

        // Aquaman
    
    // Création des Videos
    var vid_aqua = document.createElement('video');
    vid_aqua.src = "/vid/ba_aqua2.mp4";
    vid_aqua.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_aqua.addEventListener('click', function() {
        ipv_aqua();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_aqua() {
        img_aqua.parentNode.replaceChild(vid_aqua, img_aqua);
        b_aqua.removeEventListener('click', function() {
            ipv_aqua();
        });
        b_aqua.addEventListener('click', function() {
            vpi_aqua();
        });
    }

    function vpi_aqua() {
        vid_aqua.parentNode.replaceChild(img_aqua, vid_aqua);
        b_aqua.removeEventListener('click', function() {
            vpi_aqua();
        });
        b_aqua.addEventListener('click', function() {
            ipv_aqua();
        });
    }

        // Wonka
    
    // Création des Videos
    var vid_wonk = document.createElement('video');
    vid_wonk.src = "/vid/ba_wonk.mp4";
    vid_wonk.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_won.addEventListener('click', function() {
        ipv_wonk();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_wonk() {
        img_won.parentNode.replaceChild(vid_wonk, img_won);
        b_won.removeEventListener('click', function() {
            ipv_wonk();
        });
        b_won.addEventListener('click', function() {
            vpi_wonk();
        });
    }

    function vpi_wonk() {
        vid_wonk.parentNode.replaceChild(img_won, vid_wonk);
        b_won.removeEventListener('click', function() {
            vpi_wonk();
        });
        b_won.addEventListener('click', function() {
            ipv_wonk();
        });
    }

        // Pacific Rim
    
    // Création des Videos
    var vid_pac = document.createElement('video');
    vid_pac.src = "/vid/ba_pac.mp4";
    vid_pac.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_pac.addEventListener('click', function() {
        ipv_pac();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_pac() {
        img_pac.parentNode.replaceChild(vid_pac, img_pac);
        b_pac.removeEventListener('click', function() {
            ipv_pac();
        });
        b_pac.addEventListener('click', function() {
            vpi_pac();
        });
    }

    function vpi_pac() {
        vid_pac.parentNode.replaceChild(img_pac, vid_pac);
        b_pac.removeEventListener('click', function() {
            vpi_pac();
        });
        b_pac.addEventListener('click', function() {
            ipv_pac();
        });
    }

        // Deadpool
    
    // Création des Videos
    var vid_dead = document.createElement('video');
    vid_dead.src = "/vid/ba_dead.mp4";
    vid_dead.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_dead.addEventListener('click', function() {
        ipv_dead();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_dead() {
        img_dead.parentNode.replaceChild(vid_dead, img_dead);
        b_dead.removeEventListener('click', function() {
            ipv_dead();
        });
        b_dead.addEventListener('click', function() {
            vpi_dead();
        });
    }

    function vpi_dead() {
        vid_dead.parentNode.replaceChild(img_dead, vid_dead);
        b_dead.removeEventListener('click', function() {
            vpi_dead();
        });
        b_dead.addEventListener('click', function() {
            ipv_dead();
        });
    }

        // Astérix
    
    // Création des Videos
    var vid_aste = document.createElement('video');
    vid_aste.src = "/vid/ba_aste.mp4";
    vid_aste.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_aste.addEventListener('click', function() {
        ipv_aste();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_aste() {
        img_aste.parentNode.replaceChild(vid_aste, img_aste);
        b_aste.removeEventListener('click', function() {
            ipv_aste();
        });
        b_aste.addEventListener('click', function() {
            vpi_aste();
        });
    }

    function vpi_aste() {
        vid_aste.parentNode.replaceChild(img_aste, vid_aste);
        b_aste.removeEventListener('click', function() {
            vpi_aste();
        });
        b_aste.addEventListener('click', function() {
            ipv_aste();
        });
    }

        // Dragon
    
    // Création des Videos
    var vid_dra = document.createElement('video');
    vid_dra.src = "/vid/ba_dragon.mp4";
    vid_dra.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_dra.addEventListener('click', function() {
        ipv_dra();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_dra() {
        img_dra.parentNode.replaceChild(vid_dra, img_dra);
        b_dra.removeEventListener('click', function() {
            ipv_dra();
        });
        b_dra.addEventListener('click', function() {
            vpi_dra();
        });
    }

    function vpi_dra() {
        vid_dra.parentNode.replaceChild(img_dra, vid_dra);
        b_dra.removeEventListener('click', function() {
            vpi_dra();
        });
        b_dra.addEventListener('click', function() {
            ipv_dra();
        });
    }

    // Black Panther
    
    // Création des Videos
    var vid_blac = document.createElement('video');
    vid_blac.src = "/vid/ba_blac.mp4";
    vid_blac.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_blac.addEventListener('click', function() {
        ipv_blac();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_blac() {
        img_blac.parentNode.replaceChild(vid_blac, img_blac);
        b_blac.removeEventListener('click', function() {
            ipv_blac();
        });
        b_blac.addEventListener('click', function() {
            vpi_blac();
        });
    }

    function vpi_blac() {
        vid_blac.parentNode.replaceChild(img_blac, vid_blac);
        b_blac.removeEventListener('click', function() {
            vpi_blac();
        });
        b_blac.addEventListener('click', function() {
            ipv_blac();
        });
    }

    // Fast and furious 7
    
    // Création des Videos
    var vid_fast = document.createElement('video');
    vid_fast.src = "/vid/ba_fast.mp4";
    vid_fast.controls = true;

    // Ajout d'un écouteur d'événements pour le clic sur un bouton

    b_fast.addEventListener('click', function() {
        ipv_fast();
    });

    // Fonction pour remplacer l'image par la video

    function ipv_fast() {
        img_fast.parentNode.replaceChild(vid_fast, img_fast);
        b_fast.removeEventListener('click', function() {
            ipv_fast();
        });
        b_fast.addEventListener('click', function() {
            vpi_fast();
        });
    }

    function vpi_fast() {
        vid_fast.parentNode.replaceChild(img_fast, vid_fast);
        b_fast.removeEventListener('click', function() {
            vpi_fast();
        });
        b_fast.addEventListener('click', function() {
            ipv_fast();
        });
    }
});