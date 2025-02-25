const Notif = (msg, aksi) => {
    let nodeModal = document.getElementById("modal");
    nodeModal.setAttribute("class", "none-hidden");

    let nodeJudul = document.getElementById("judul");

    let nodeIconMsg = document.getElementById("iconMsg");
    nodeIconMsg.setAttribute("class", "pt-1 hide");

    let nodeMsg = document.getElementById("msg");
    nodeMsg.setAttribute("class", "text-light p-1 pt-2 m-0 hide")

    let nodeMsgBeliItem = document.getElementById("msg_beliItem");
    nodeMsgBeliItem.setAttribute("class", "hide");

    let nodeSpanNamaItem = document.getElementById("namaItem");

    if (aksi == "Beli Item") {
        let player_id = $(`#nama_team_att`).val();

        if (player_id != null) {
            nodeJudul.innerHTML = "CONFIRMATION";

            nodeMsgBeliItem.setAttribute("class", "");

            nodeSpanNamaItem.innerHTML = 'CipherTrace Blue Key';
        } else {
            MsgGagal("Please select a team first.");
        }
    } else if (aksi == "Item Berhasil Dibeli") {
        nodeJudul.innerHTML = "SUCCESSFUL";
        nodeIconMsg.src = "{{ asset('ilpc2022') }}/asset2025/GameBesar/Ilo_Yes.png";
        nodeIconMsg.setAttribute("class", "pt-1");

        nodeMsg.setAttribute("class", "text-light p-1 pt-2 m-0");
        nodeMsg.innerHTML = msg;
    } else if (aksi == "Pemberitahuan") {
        nodeJudul.innerHTML = "UNSUCCESSFUL";
        nodeMsg.setAttribute("class", "text-light p-1 pt-2 m-0");
        nodeMsg.innerHTML = msg;
    } else if (aksi == "error") {
        MsgGagal(msg);
    }
}

const MsgGagal = (msg) => {
    let nodeMsg = document.getElementById("msg");
    let nodeJudul = document.getElementById("judul");

    let nodeIconMsg = document.getElementById("iconMsg");
    nodeIconMsg.setAttribute("class", "pt-1");
    nodeIconMsg.src = "{{ asset('ilpc2022') }}/asset2025/GameBesar/Ilo_No.png";

    nodeMsg.innerHTML = msg;
    nodeMsg.setAttribute("class", "text-light p-1 pt-2 m-0");

    nodeJudul.innerHTML = "FAILED";
}

const Close = () => {
    let nodeModal = document.getElementById("modal");
    nodeModal.setAttribute("class", "hidden");
}
