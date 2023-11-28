var signupEntry = "";
var thanks = false;
var error = false;
var loading = false;

function resetFlags() {
    document.querySelector("#thanks").style.display = "none";
    document.querySelector("#error").style.display = "none";
}

function invalid() {
    var patpee = new RegExp(/^~[a-z-]*$/);
    var email = new RegExp(/^.*@.*\..*$/);

    if (!patpee.test(signupEntry) && !email.test(signupEntry)) {
        showError();
        return true;
    }
    return false;
}

function submitForm(event) {
    event.preventDefault();
    loading = true;

    signupEntry = document.querySelector("#input-entry").value;
    if (invalid()) {
        return;
    }
    
    let formData = new FormData();
    formData.append("entry.1987957812", signupEntry);

    const url =
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfBDo4OJQ3iJrMqTcWrcg6m_qqP09Hni9w-44dirgOUri3pxA/formResponse";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
    })
    .then((r) => {
        console.log("done ", r);
        document.querySelector("#input-entry").value = "";
        showThanks();
    })
    .catch((e) => {
        console.log("bad ", { e });
        showError();
    })
    .finally(() => {
        loading = false;
    });
}

function showThanks() {
    document.querySelector("#thanks").style.display = "block";
    document.querySelector("#secretdm").style.display = "none"; // Add this line to hide the #secretdm element
    setTimeout(() => {
        document.querySelector("#thanks").style.display = "none";
        document.querySelector("#secretdm").style.display = "block"; // Add this line to show the #secretdm element again
    }, 3500);
}
function showError() {
    document.querySelector("#error").style.display = "block";
    document.querySelector("#secretdm").style.display = "none"; // Hide the #secretdm element
    setTimeout(() => {
        document.querySelector("#error").style.display = "none";
        document.querySelector("#secretdm").style.display = "block"; // Show the #secretdm element again
    }, 5000);
}
