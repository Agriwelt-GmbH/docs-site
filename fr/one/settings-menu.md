---
title: Le menu Settings
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/settings-menu.html
---

# Le menu Settings

Toutes les rubriques du menu de réglages du boîtier lui-même — luminosité, volume, langue, temporisation des alarmes, diagrammes, date et heure — avec leur plage et leur niveau d'accès.

Le menu **« Settings »** (réglages) contient les réglages du boîtier lui-même. Ouvrez-le depuis l'écran d'accueil : **« MENU »** → **« Settings »**. Les réglages des différents capteurs se trouvent ailleurs — voir [Réglages des capteurs](sensor-settings.md).

::: {.anatomy fig="menu-settings"}
1. **« Brightness,% »** (luminosité) — le rétroéclairage. **« AUTO »** laisse le boîtier le régler d'après son capteur de lumière.
2. **« Volume »** — le volume des sons du boîtier.
3. **« Language »** (langue) — la langue des écrans.
4. **« Buttons sound »** (son des touches) — un son à chaque pression sur une touche.
5. **« Seeding diagram settings »** (réglages du diagramme de semis) — la manière dont le diagramme de semis est tracé. [Plus bas](#diagram-settings).
6. **« Change Date&Time »** (modifier la date et l'heure) — l'horloge. [Plus bas](#change-date-and-time).
7. **« Alarm delay »** (temporisation des alarmes) — la durée pendant laquelle un défaut doit persister avant que la fenêtre d'alarme s'ouvre.
8. **« Seeding machine parameters »** (paramètres du semoir) — largeur, modes, jalonnage, étalonnages. [Paramètres du semoir](seeding-machine-parameters.md).
9. **Barre de défilement.** D'autres rubriques suivent plus bas.

Le menu **« Settings »** d'un semoir équipé d'un capteur de vitesse, au niveau **« Agronomist »**.
:::

> **IMPORTANT**
>
> **Le menu n'a pas toujours les mêmes rubriques.** Le niveau d'accès, la machine déclarée dans le profil et le mode d'affichage des diagrammes le modifient. Si une rubrique citée ici manque, vérifiez ces trois points avant de chercher une panne.

## Les rubriques {#the-items}

| Rubrique | Plage | Niveau |
| --- | --- | --- |
| **« Brightness,% »** | 0 … 100, par pas de 10. **À 0, la rubrique affiche « AUTO »** et le boîtier règle le rétroéclairage d'après son capteur de lumière — il éclaircit vite et assombrit lentement. Toute autre valeur fixe le rétroéclairage. | Operator |
| **« Volume »** | 0 … 100, par pas de 10 | Operator |
| **« Language »** | les langues installées | Operator |
| **« Buttons sound »** | **« No »** (non) / **« Yes »** (oui) | Operator |
| **« Seeding diagram settings »**, **« Fertilizer diagram settings »** (réglages du diagramme d'engrais), **« Liquid fertilizer diagram settings »** (réglages du diagramme d'engrais liquide) | Sous-menus. Chacun n'est affiché que si la machine a un capteur de vitesse, si ses propres capteurs figurent dans le profil et si son diagramme n'est **pas** en mode **« Flow »** (débit). | Operator |
| **« Change Date&Time »** | sous-menu | Operator |
| **« Alarm delay »** | **2 … 20 s**, 3 s par défaut. Voir [Fonctionnement des alarmes](how-alarms-work.md). | Operator |
| **« Product rate error,% »** (écart de dose du produit) | **3 … 20 %**. Affiché seulement quand un produit est dosé au poids ou qu'un contrôleur de pompe d'engrais liquide figure dans le profil. | Agronomist |
| **« Seeding machine parameters »** | Sous-menu. Masqué quand la machine n'a ni capteur de vitesse ni actionneur de jalonnage. | Agronomist |
| **« User »** (utilisateur) | Le niveau d'accès — voir [Niveaux d'accès](access-levels.md). | Operator |
| **« Reset settings »** (réinitialiser les réglages) | Remet ce menu aux valeurs d'usine. | Service |

Sur une machine à deux groupes de capteurs de graines, les deux rubriques de diagramme s'affichent **« Seeding gr.A diagram »** et **« Seeding gr.B diagram »**.

**Les réglages sont enregistrés d'eux-mêmes** quelques secondes après la dernière pression. Patientez un instant avant d'éteindre le boîtier.

## Réglages des diagrammes {#diagram-settings}

![Les réglages du diagramme des capteurs de graines.](figures/nast-seedgraph)

Il existe trois menus de ce type — semences, engrais solide, engrais liquide — avec les mêmes rubriques :

| Rubrique | Ce qu'elle fait |
| --- | --- |
| **« Skips & Doubles »** (manques et doubles) | Affiche les barres de manques et de doubles sur le dernier tronçon du parcours. **Mode « Precise » (précis) uniquement.** |
| **« Grid »** (grille) | **« No »** — la ligne de dose seule ; **« Partial »** (partielle) — les limites de tolérance seules ; **« Full »** (complète) — les deux. |
| **« Scale S&D,% »** (échelle des manques et doubles) | La hauteur des barres de manques et de doubles, **5 … 50 %** par pas de 5. **Mode « Precise » uniquement.** |
| **« Reset to defaults »** (valeurs par défaut) | Remet ce menu aux valeurs d'usine. Niveau **Service** uniquement. |

## Modifier la date et l'heure {#change-date-and-time}

::: steps
1. Sélectionnez **« Change Date&Time »** et appuyez sur **« MENU »**. Les champs de date et d'heure s'ouvrent.

   ![Les champs de date et d'heure.](figures/menu-datetime)

2. Sélectionnez chaque champ avec **« UP »** / **« DOWN »** et réglez-le avec **« PLUS »** / **« MINUS »**.

3. Sélectionnez **« Set »** (valider) et appuyez sur **« MENU »**. L'horloge prend les nouvelles valeurs. **« BACK »** à la place laisse l'horloge inchangée.
:::
