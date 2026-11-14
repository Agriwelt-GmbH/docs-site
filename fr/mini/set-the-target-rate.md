---
title: Modifier la dose de consigne ou le seuil d'alarme
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/set-the-target-rate.html
---

# Modifier la dose de consigne ou le seuil d'alarme

Augmenter ou diminuer le seuil d'alarme, la dose de consigne en graines par mètre ou la dose de produit en kg/ha — sur l'écran d'accueil ou sur l'écran de régulation de dose.

Chaque diagramme et chaque produit appliqué au poids a un **champ de dose** : la valeur mesurée en haut, la valeur réglée en dessous. Ce qu'est la valeur réglée dépend du mode — voir [Le diagramme des sections](section-diagram.md) :

| **Mode** | **La valeur réglée** | **Un pas** |
| --- | --- | --- |
| **« Flow »** (débit) | Seuil d'alarme, graines par seconde | 1 s/s |
| **« Hybrid »** (hybride) | Dose de consigne, graines par mètre | 1 s/m |
| **« Precise »** (précis) | Dose de consigne, graines par mètre | 0,1 s/m (0,5 à 50,0) |
| Produit au poids | Dose de consigne, kg/ha | 0,1 kg/ha jusqu'à 50,0, au-delà 1 kg/ha (1,0 à 999,0) |
| Engrais liquide | Dose de consigne, L/ha | 0,1 L/ha jusqu'à 50,0, au-delà 1 L/ha |

## Sur l'écran d'accueil {#on-the-home-screen}

::: steps
1. Appuyez une fois sur **« PLUS »** ou **« MINUS »**. Le champ de dose utilisé en dernier est sélectionné et clignote ; rien n'a encore changé.

   ![Modification de la dose de consigne d'un produit en kg/ha sur l'écran d'accueil.](figures/rate-mass-change)

2. Si la machine a plus d'un champ de dose — semences et engrais, produits au poids — appuyez sur **« DOWN »** ou **« UP »** pour passer au suivant ou au précédent.

3. Appuyez sur **« PLUS »** pour augmenter la valeur ou sur **« MINUS »** pour la diminuer, d'un pas par toucher. Maintenir le bouton ne le répète pas.

4. Appuyez sur **« BACK »** pour terminer, ou attendez simplement : cinq secondes après le dernier toucher, le champ cesse de clignoter. La nouvelle valeur est en vigueur.
:::

En mode **« Precise »**, le panneau affiche aussi, pendant que vous modifiez la consigne, la même dose sous forme de population en **ks/Ha** et d'écartement entre les graines en centimètres.

## Sur l'écran de régulation de dose {#on-the-rate-control-screen}

::: steps
1. Appuyez sur **« PLUS »** ou **« MINUS »**. La consigne sélectionnée en dernier est mise en évidence — fond bleu-vert foncé, valeur jaune ; après la mise sous tension, **« Product 1 »** (produit 1). Le premier appui ne change rien.

   ![L'écran de régulation de dose avec le produit 2 sélectionné pour une modification.](figures/mini-rate-edit)

2. Passez à la consigne voulue avec **« UP »** et **« DOWN »**.

3. Réglez la valeur avec **« PLUS »** et **« MINUS »**.

4. Appuyez sur **« BACK »**. La mise en évidence disparaît ; les indicateurs affichent de nouveau les doses appliquées.
:::

En descendant depuis plus de 50,0, la dose d'un produit ou d'un engrais liquide s'arrête exactement à 50,0 ; le toucher suivant la ramène en dessous, par pas de 0,1. La consigne de semences en mode **« Precise »** est un nombre unique pour tous les capteurs de graines : l'écran d'accueil et l'écran de régulation de dose modifient la même valeur, et il n'existe pas d'élément de menu pour elle.

La valeur est enregistrée d'elle-même environ une seconde et demie après la dernière modification ; attendez ce délai avant d'éteindre.

> **IMPORTANT**
>
> **Les colonnes sous la ligne ne sont pas gardées.** Réglé bien au-dessus de ce que la machine délivre, le seuil fait passer les colonnes sous la ligne et le panneau affiche **« NOT UNDER CONTROL »** (hors surveillance). Sur un semoir à céréales, laissez le panneau trouver le seuil : [Régler le seuil d'alarme](set-the-alarm-level.md).
