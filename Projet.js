
        function validateForm(event) {
            let effetsChecked = document.querySelector('input[name="effets-secondaires"]:checked');
            let typesEffets = document.getElementById('types-effets').value.trim();
            let typesEffetsAlert = document.getElementById('types-effets-alert');
            
            // Si "Oui" est sélectionné mais que le champ de description des effets est vide
            if (effetsChecked && effetsChecked.value === "oui" && typesEffets === "") {
                typesEffetsAlert.style.display = 'block';
                event.preventDefault(); // Empêche l'envoi du formulaire
            } else {
                typesEffetsAlert.style.display = 'none';
            }
        }

        window.onload = function() {
            document.querySelector('form').addEventListener('submit', validateForm);
        };
		