---
title: Affecter un produit à un moteur de doseur
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/assign-product-to-motor.html
---

# Affecter un produit à un moteur de doseur

Indiquer au panneau lequel de ses trois produits chaque moteur de doseur applique, pour qu'une seule dose de consigne en kg/ha serve tous les moteurs de ce produit.

Chaque moteur électrique de doseur entraîne un doseur et appartient à un seul produit. Le panneau gère jusqu'à trois produits : **« Product 1 »** (produit 1), **« Product 2 »** et **« Product 3 »**. Plusieurs moteurs peuvent appliquer le même produit ; sa dose est alors réglée une seule fois pour tous. À l'état d'usine, **tous** les moteurs sont sur **« Product 1 »**.

Cela demande le niveau Agronomist ([Activer le niveau Agronomist](enable-agronomist-level.md)) et des moteurs en mode **« Flow »** (débit) ou **« Hybrid »** (hybride).

> **ATTENTION**
>
> **La parcelle active peut devoir être effacée.** Si la parcelle active contient déjà des données, le panneau exige que ses statistiques soient effacées avant de changer le type de produit ; **« Yes »** (oui) les efface définitivement. Sélectionnez d'abord une parcelle vide si vous voulez les conserver — [Commencer une nouvelle parcelle](start-a-new-field.md).

::: steps
1. Allez à l'écran Motors et maintenez **« MENU »**. Le premier moteur est sélectionné.

   ![L'écran Motors avec un moteur sélectionné.](figures/mini-motors-focus)

2. Sélectionnez le moteur avec **« UP »** et **« DOWN »**.

3. Appuyez sur **« MENU »**. Le menu contextuel s'ouvre.

4. Allez à **« Type of product »** (type de produit) avec **« DOWN »**.

5. Choisissez le produit avec **« PLUS »** et **« MINUS »**.

   ![Type of product avant et après la modification.](figures/mini-motors-product-type)

6. Si le panneau demande d'effacer les statistiques, appuyez sur **« MENU »** pour **« Yes »** ou sur **« BACK »** pour **« No »** (non).

   ![La question avant le changement de type de produit sur une parcelle contenant des données.](figures/mini-motors-product-change-confirm)

7. Appuyez sur **« BACK »**. Vous voilà de retour sur l'écran Motors. Recommencez à partir de l'étape 2 pour chaque autre moteur.
:::

Pendant que vous parcourez les valeurs, un produit qu'un arbre de doseur à contrôle du poids applique déjà est sauté — un produit est appliqué soit par des moteurs, soit par de tels doseurs, pas par les deux. Si aucun autre produit n'est disponible, la valeur ne bouge pas ; ce n'est pas un défaut.

Réglez ensuite la dose de chaque produit : [Modifier la dose de consigne](set-the-target-rate.md), et étalonnez chaque moteur : [Étalonner un moteur au poids](calibrate-motor-weight.md).
