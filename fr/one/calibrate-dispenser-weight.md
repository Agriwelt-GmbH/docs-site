---
title: Étalonner le doseur au poids
product: Hectare One
language: fr
firmware: 1.2.3
url: https://docs.agriwelt.com/fr/one/calibrate-dispenser-weight.html
---

# Étalonner le doseur au poids

Transformez un doseur entraîné par la roue en récipient de pesée et pesez le produit, pour que le boîtier puisse surveiller la dose en kilogrammes par hectare.

Cet étalonnage mémorise combien de grammes délivre une impulsion de l'arbre du doseur — **« Weight, gr »** (poids, g) et **« Weight, pulses »** (poids, impulsions) du capteur de doseur. Refaites-le chaque fois que le produit change. Il se fait à l'arrêt, au niveau **« Operator »** (opérateur) ; le boîtier passe de lui-même au niveau **« Agronomist »** (agronome) pour la durée de l'étalonnage et rétablit le niveau en sortant.

**Il vous faut :** un récipient pouvant contenir 2 à 60 kg de produit, et une balance.

La rubrique n'existe que si **« Weight control »** (contrôle au poids) est activé pour ce doseur ([Capteur d'arbre de doseur](dispenser-sensor.md)).

::: steps
1. Maintenez appuyée la vignette du capteur de doseur et choisissez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids). Le premier écran liste les doses de consigne des produits utilisés, en kg/ha ; le produit de ce doseur est repéré par **>** et **<**.

2. Touchez **« Calibrate dispenser N »** (étalonner le doseur N) (ou appuyez sur **« PLUS »**). Si le doseur ne peut pas être étalonné, une ligne rouge s'affiche à la place avec la raison : **« Not controlled »** (non surveillé), **« No connection »** (pas de liaison) ou **« FAILURE »** (échec). **« Exit »** (quitter) (ou **« BACK »**) permet de sortir.

3. Le deuxième écran donne la préparation. Pesez le récipient vide et notez le poids.

4. Remplissez la trémie de produit et placez le récipient vide sous le doseur.

5. Tournez le rotor jusqu'à ce que ses alvéoles soient remplies. **C'est plus important qu'il n'y paraît :** un rotor aux alvéoles vides délivre moins que son compte pendant les premiers tours, et cette erreur se retrouve dans la valeur mémorisée.

6. Touchez **« Go to calibration »** (passer à l'étalonnage) (ou appuyez sur **« UP »**). **« Cancel »** (annuler) (ou **« BACK »**) revient en arrière. Le troisième écran compte les **« Impulses »** (impulsions) et fait tourner une icône de rotor à mesure qu'elles arrivent.

7. Videz le récipient et placez-le de nouveau sous le doseur.

8. Tournez le rotor du doseur et remplissez le récipient autant que possible — **pas moins de 2 kg et pas plus de 60 kg**.

9. Touchez **« Complete »** (terminer) (ou appuyez sur **« MINUS »**). Le bouton n'apparaît qu'après **plus de dix impulsions**. **« Cancel »** demande **« Are you sure? »** (êtes-vous sûr ?) avant d'abandonner la mesure.

10. Pesez le récipient rempli. Le pavé numérique demande **« Enter the difference of the filled and empty container in grams »** (saisissez la différence entre le récipient plein et le récipient vide, en grammes). Tapez le poids du produit seul — **2000 à 60000 g** ; le pavé propose 10000 — et touchez **« OK »**. Le boîtier mémorise **« Weight, gr »** et **« Weight, pulses »**.
:::

> **REMARQUE**
>
> **Une alarme de doseur pendant l'étalonnage ne l'interrompt pas** — seule une liaison perdue le fait. La mesure est mécanique, et le boîtier s'efface jusqu'à la pesée du récipient.
