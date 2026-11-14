---
title: Étalonner un moteur de doseur au poids
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/calibrate-motor-weight.html
---

# Étalonner un moteur de doseur au poids

Indiquer au panneau quelle quantité de produit un doseur entraîné par moteur délivre par tour d'arbre — ce qu'il faut, les étapes à l'écran, et ce que signifient les messages d'échec.

L'étalonnage indique au panneau quelle quantité de produit le doseur délivre par tour de son arbre. Sans lui, le panneau ne peut pas convertir la dose en kg/ha en une vitesse d'arbre. Étalonnez chaque doseur séparément, et de nouveau chaque fois que le produit ou le lot de semences change. Cela concerne les moteurs en modes **« Flow »** (débit) et **« Hybrid »** (hybride).

**Il vous faut :** une balance, un récipient à placer sous le doseur, et le produit dans la trémie.

> **AVERTISSEMENT**
>
> **L'arbre du doseur tourne machine à l'arrêt.** Avant de commencer, assurez-vous que personne ne se trouve près des doseurs, des arbres ou de l'entraînement. Depuis la cabine, on ne les voit pas.

::: steps
1. Arrêtez la machine. Tant qu'elle avance, l'élément d'étalonnage est masqué.

2. Ouvrez le menu contextuel du moteur — sur l'[écran Motors](motors-screen.md), ou depuis son produit sur l'[écran de régulation de dose](rate-control-screen.md). Sélectionnez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids) (depuis l'écran de régulation de dose : **« Calibration, product »** (étalonnage, produit)) et appuyez sur **« MENU »**.

3. Le premier écran montre les doses de consigne des produits utilisés — le produit de ce moteur entre des flèches — et, sous **« Product dosage speed limitation: »** (limitation de vitesse du dosage du produit), la vitesse d'avancement la plus basse et la plus haute à laquelle les doses peuvent être appliquées. Appuyez sur **« PLUS »**.

   ![Le premier écran d'étalonnage avec les limites de vitesse.](figures/mini-motors-cal-workinfo)

4. L'écran énumère ce qu'il faut faire avant d'étalonner : peser le récipient vide et noter le poids, remplir la trémie, placer le récipient sous le doseur, remplir les alvéoles du rotor. Appuyez sur **« MENU »** pour remplir les alvéoles du rotor.

   ![La liste des actions avant l'étalonnage.](figures/mini-motors-cal-fillrotor)

5. Le moteur fait tourner l'arbre et le compteur **« Rotations »** (rotations) avance. Après **deux tours**, le panneau arrête le moteur et revient. **« BACK »** l'arrête plus tôt.

6. Appuyez sur **« UP »**. L'écran énumère les étapes de l'étalonnage proprement dit : vider le récipient, le placer sous le doseur, étalonner, arrêter le moteur, peser. Videz le récipient et remettez-le en place.

7. Appuyez sur **« MENU »**. Le moteur tourne et le doseur remplit le récipient. Recueillez-en le plus possible — **au moins 1 kg, au plus 60 kg**.

8. Appuyez sur **« BACK »** pour arrêter le moteur.

9. Après plus d'un tour d'arbre, la ligne du bas propose **« MINUS »** pour terminer l'étalonnage. Appuyez sur **« MINUS »**.

   ![L'écran d'étalonnage avec la ligne pour le terminer.](figures/mini-motors-cal-prepare)

10. Pesez le récipient plein. Sur le [pavé numérique](number-pad.md), saisissez la **différence entre plein et vide, en grammes**, et appuyez sur **« MENU »**. Le panneau enregistre **« Weight, gr »** (poids, g) et **« Rotations »** et revient au premier écran.

    ![Le pavé numérique qui demande le poids en grammes.](figures/mini-motors-cal-weight)

11. Appuyez sur **« BACK »** pour quitter.
:::

Pour abandonner l'étalonnage au lieu de l'étape 9, appuyez sur **« BACK »** : le panneau demande **« Are you sure? »** (êtes-vous sûr ?) et abandonne avec **« PLUS »** ; **« MINUS »** revient à l'étalonnage.

> **ATTENTION**
>
> **Écrasez complètement le 10000, et n'acceptez jamais un champ vide.** Le pavé s'ouvre chaque fois sur 10000. Les valeurs inférieures à 1000 g ou supérieures à 60000 g sont ramenées sans bruit à la limite ; un champ vide écrit sans un mot des valeurs inutilisables, et le doseur n'appliquera plus la dose.

Le menu contextuel affiche ensuite non pas vos grammes mais une paire de nombres équivalente ; seul leur rapport compte. Elle est enregistrée d'elle-même.

## Messages pendant l'étalonnage {#messages-during-the-calibration}

| **Message** | **Signification et conduite à tenir** |
| --- | --- |
| **« FAILURE »** (défaillance) avec une raison, p. ex. **« No connection »** (pas de liaison) ou **« No data from rotation sensor »** (pas de données du capteur de rotation) | La liaison a été perdue, le moteur a signalé une alarme, ou aucun tour d'arbre n'est arrivé pendant dix secondes. Le moteur est arrêté, rien n'est enregistré. **« BACK »** ramène au premier écran ; recommencez. |
| **« All electric motors not controlled. »** (aucun moteur électrique sous surveillance) | Aucun moteur n'est sous surveillance. Mettez le moteur sous surveillance avec **« PLUS »** sur l'écran Motors. |
| Le nom du moteur en rouge avec **« Not controlled »** (hors surveillance), **« No connection »** ou **« FAILURE »** | L'étalonnage ne peut pas démarrer tant que cet état n'est pas levé. |
| **« Can not provide dosage! »** (dosage impossible), limites en rouge | Les doses se contredisent : aucune vitesse ne les satisfait toutes. Modifiez une dose, ou les limites de vitesse d'arbre — chaque ligne nomme le produit qui la fixe. |
| **« Run calibration on the console »** (lancer l'étalonnage sur la console) | Un bouton-poussoir est configuré sur le contrôleur de moteur : le moteur ne tourne que tant que le bouton est maintenu. |
| La vitesse doit être nulle (en anglais dans toutes les langues) | La machine avance. Arrêtez-la. |

![L'écran d'échec de l'étalonnage.](figures/mini-motors-cal-failure)
