---
title: L'écran Statistics
product: Hectare 5
language: fr
firmware: 1.0.20
url: https://docs.agriwelt.com/fr/five/statistics-screen.html
---

# L'écran Statistics

Le rapport du travail sur chaque parcelle, bloc par bloc et ligne par ligne — et le menu qui choisit la parcelle, enregistre le rapport et l'efface.

L'écran Statistics est le rapport du travail : la distance parcourue, la surface couverte, la quantité semée, et la régularité. Il est conservé **séparément pour chacune de cinq parcelles** et survit à l'extinction. Ouvrez-le depuis l'écran Table par un **long glissement vers la gauche**. Il n'a pas de retour en arrière : un nouveau long glissement vers la gauche mène à l'écran Motors, ou à l'écran d'accueil sur une machine sans moteurs.

Le rapport est une longue liste. **Glissez vers le haut ou vers le bas** pour la faire défiler, une ligne par glissement.

## L'en-tête et le travail sur la parcelle {#the-head-and-the-work-on-the-field}

::: {.anatomy fig="five-stat-head"}
1. **Numéro de parcelle.** **Field #** et le numéro de la parcelle dont vous voyez le rapport. Un **glissement à deux doigts** vers la droite ou vers la gauche affiche la parcelle suivante ou la précédente.
2. **(A).** C'est la parcelle active — celle dans laquelle le panneau écrit maintenant.
3. **Date et heure.** La date du jour et l'heure.
4. **Trajet.** Distance parcourue, en **km**.
5. **Surface.** Surface couverte, en **Ha**.
6. **Temps de travail.** Heures, minutes et secondes de travail.
7. **Vitesse de déplacement.** La vitesse d'avancement moyenne.
8. **Started / Ended.** Quand le travail sur cette parcelle a commencé et fini.
9. **Seeding.** Le bloc suivant — voir plus bas.

L'en-tête du rapport d'un semoir monograine de huit rangs en mode **« Precise »**.
:::

## Le bloc de semis {#the-seeding-block}

::: {.anatomy fig="five-stat-seeding"}
1. **« Seeds sown (x1000) »** (graines semées, ×1000). Le total, en milliers de graines.
2. **« Quality »** (qualité). La part de graines déposées une à une, comme voulu. Jugez le travail à ce chiffre.
3. **« Doubles »** (doubles). Deux graines là où une était voulue.
4. **« Skips »** (manques). Un vide là où une graine était voulue.
5. **« Not sown »** (non semé). La part du parcours où rien n'est sorti du tout.
6. **« Factical »** / **« Setuped »**. Les deux titres de colonnes : ce qui a été réellement appliqué, et ce qui a été réglé.
7. **« Population,ks/Ha »** (population, milliers/ha). En milliers de graines par hectare ; l'écart entre parenthèses.
8. **« Rate, s/m »** (dose, graines/m). En graines par mètre ; la consigne à droite.
9. **« Sown »** / **« Not sown »** / **« Unknown »**. La parcelle répartie en trois, en hectares.
10. **Barre.** La même répartition en barre colorée : vert semé, rouge non semé, gris inconnu.
11. **« Seed sensors »** (capteurs de graines). Le bloc suivant — section par section.
:::

**« Unknown »** (inconnu) est la surface parcourue pendant que le panneau ne pouvait pas juger — pas un défaut, mais pas non plus la preuve d'un travail.

> **REMARQUE**
>
> **Un écart important n'est pas toujours un défaut de la machine.** Avant de rien changer sur le semoir, vérifiez que la vitesse vue par le panneau correspond à la vitesse réelle — une vitesse fausse entraîne avec elle tous les chiffres de dose.

## Section par section {#section-by-section}

::: {.anatomy fig="five-stat-sensors"}
1. **« Seed sensors »**. Un bloc par section suit.
2. **Section.** Le numéro de la section, et les graines qu'elle a comptées.
3. **q d s n.** Qualité, doubles, manques et non-semé pour cette section, en pourcentage.
4. **Semé / non semé / inconnu.** La part de chacun pour cette section, et la barre.
5. **Population.** Milliers par hectare pour cette section, avec son écart.
6. **Espacement.** Graines par mètre pour cette section, avec son écart.
:::

C'est ici qu'un semoir irrégulier se trahit. Une section de qualité inférieure aux autres, ou dont la partie rouge de la barre est plus longue, désigne ce rang : une sortie bouchée, un disque usé, un capteur à nettoyer.

## Blocs qui apparaissent sur d'autres machines {#blocks-that-appear-on-other-machines}

| **Bloc** | **Ce qu'il contient** |
| --- | --- |
| **« Work without alarms control »** (travail sans contrôle des alarmes) | La part du travail que le panneau n'a **pas** surveillée — effectuée avec la surveillance désactivée ou verrouillée. |
| **« Speed control »** (contrôle de la vitesse) | Sur quelle distance et pendant combien de temps vous avez roulé hors de la plage de vitesse permise. |
| **« Fertilizing »** (fertilisation), engrais liquide | Fertilisé / non fertilisé / inconnu, si la machine les applique. |
| **Product** | Pour un produit appliqué en masse : la quantité appliquée, et la dose réelle par rapport à la dose réglée en kg/ha, sur la ligne **Factical: … Setuped: …**. |

## Le menu de l'écran {#the-menu-of-the-screen}

Touchez l'écran avec **deux doigts**.

![Le menu de l'écran Statistics.](figures/five-stat-menu)

| **Élément** | **Ce qu'il fait** |
| --- | --- |
| **« Select field »** (choisir la parcelle) | Fait de la parcelle affichée la parcelle active — le panneau écrit désormais dedans. Affiché seulement quand vous regardez une parcelle qui n'est pas active. Si cette parcelle a été travaillée avec un autre ensemble de produits en masse, le panneau demande d'abord d'effacer ses données. |
| **« Statistics »** (statistiques) | Bascule le rapport entre **« Short »** (court) et **« Full »** (complet). Non affiché sur une machine sans capteur de vitesse. |
| **« Mileage »** (kilométrage) | Trajet en km et surface en ha sur toute la vie du système. Ces totaux ne peuvent pas être remis à zéro. Sans capteur de vitesse, le temps de fonctionnement cumulé à la place. |
| **« Save to SD-card »** (enregistrer sur la carte SD) | Écrit une parcelle, ou toutes, sur la carte mémoire. Affiché tant qu'une carte est prête. |
| **« Zero statistics »** (remettre les statistiques à zéro) | Efface les statistiques de la parcelle. Au niveau Operator, le panneau demande d'abord le code d'un niveau supérieur ; au-dessus d'Operator, il demande **« Are you sure? »** (êtes-vous sûr ?). |

> **IMPORTANT**
>
> **Les statistiques sont aussi effacées par autre chose.** Changer le mode de contrôle du semis vers ou depuis **« Precise »**, ou modifier **« Width, cm »** (largeur, cm), demande une confirmation et, si vous confirmez, **efface les statistiques de toutes les parcelles**. Enregistrez d'abord sur la carte mémoire ce dont vous avez besoin.
