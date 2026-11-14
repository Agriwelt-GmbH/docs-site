---
title: Étalonner le doseur au poids
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/calibrate-dispenser-weight.html
---

# Étalonner le doseur au poids

Faites tourner dans un récipient un doseur entraîné par la roue et pesez le produit, pour que le panneau puisse surveiller la dose en kilogrammes par hectare.

Cet étalonnage enregistre combien de grammes le doseur délivre par impulsion de l'arbre — **« Weight, gr »** (poids, g) et **« Weight, pulses »** (impulsions du poids) du capteur de doseur. Refaites-le à chaque changement de produit. Il se fait à l'arrêt, au niveau **« Operator »** ; le panneau se place lui-même au niveau **« Agronomist »** pour la durée de l'étalonnage et remet le niveau en sortant.

**Il vous faut :** un récipient qui contient de 2 à 60 kg du produit, et une balance.

L'élément n'existe que si **« Weight control »** (contrôle au poids) est activé pour ce doseur ([Capteur d'arbre de doseur](dispenser-sensor.md)). Chaque étape est un toucher sur un bouton de l'écran.

::: steps
1. Maintenez le doigt sur l'icône du doseur de l'écran d'accueil. Touchez **« Dispenser calibration(weight) »** (étalonnage du doseur au poids), puis touchez-le de nouveau. Le premier écran liste les doses de consigne des produits utilisés, en kg/ha ; le produit de ce doseur est repéré.

   ![Le premier écran de l'étalonnage au poids.](figures/five-calib-dispenser-weight)

2. Touchez **« Calibrate dispenser N »** (étalonner le doseur N). Si le doseur ne peut pas être étalonné, une ligne rouge s'affiche à la place avec la raison : **« Not controlled »** (non surveillé), **« No connection »** (pas de connexion) ou **« FAILURE »** (défaillance). **« Exit »** (quitter) quitte.

3. Le deuxième écran donne la préparation. Pesez le récipient vide et notez le poids.

4. Remplissez la trémie du produit et placez le récipient vide sous le doseur.

5. Tournez le rouleau jusqu'à ce que ses alvéoles soient pleines. **C'est plus important qu'il n'y paraît :** un rouleau aux alvéoles vides donne un poids insuffisant pendant les premiers tours, et cette erreur se retrouve dans la valeur enregistrée.

6. Touchez **« Go to calibration »** (passer à l'étalonnage). **« Cancel »** (annuler) revient au premier écran. Le troisième écran compte les **« Impulses »** (impulsions) et fait tourner une icône de rouleau à mesure qu'elles arrivent.

7. Videz le récipient et placez-le de nouveau sous le doseur.

8. Tournez le rouleau du doseur et remplissez le récipient autant que possible — **pas moins de 2 kg et pas plus de 60 kg**.

9. Touchez **« Complete »** (terminer). Le bouton n'apparaît qu'après **plus de dix impulsions**. **« Cancel »** demande **« Are you sure? »** (êtes-vous sûr ?) avant de jeter la mesure.

10. Pesez le récipient rempli. Le pavé numérique demande **« Enter the difference of the filled and empty container in grams »** (saisissez la différence entre le récipient plein et le récipient vide, en grammes). Saisissez le poids du produit seul — **2000 à 60000 g** ; le pavé propose 10000 — et touchez **« OK »**. Le panneau enregistre **« Weight, gr »** et **« Weight, pulses »**.
:::

Un poids saisi hors de 2000 … 60000 g n'est pas refusé : le panneau prend la limite la plus proche. Pesez soigneusement et restez dans la plage.

> **REMARQUE**
>
> **Une alarme de doseur pendant l'étalonnage ne l'arrête pas** — seule une connexion perdue le fait. La mesure est mécanique, et le panneau s'efface jusqu'à la pesée du récipient. Un doseur déjà en alarme ne peut pas lancer un étalonnage.
