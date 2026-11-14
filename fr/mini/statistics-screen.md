---
title: L'écran Statistics
product: Hectare Mini
language: fr
firmware: 2.2.8
url: https://docs.agriwelt.com/fr/mini/statistics-screen.html
---

# L'écran Statistics

Le rapport du travail sur chaque parcelle, bloc par bloc — et le menu qui choisit la parcelle active, montre le kilométrage cumulé et efface une parcelle.

L'écran Statistics (statistiques) est le rapport du travail : la distance parcourue, la surface couverte, ce qui a été semé et avec quelle régularité. Il est tenu **séparément pour chaque parcelle** et survit à l'arrêt. Ouvrez-le avec **« HOME »** depuis le tableau de semis (deux fois depuis l'écran d'accueil) ; **« BACK »** ramène à l'écran d'accueil, **« HOME »** passe à l'écran de travail suivant.

Le rapport est une longue liste. **« UP »** et **« DOWN »** la font défiler d'une ligne par toucher ; **« PLUS »** et **« MINUS »** affichent la parcelle suivante ou précédente. Sur l'écran lui-même, un balayage vers le haut ou le bas fait défiler, un balayage à deux doigts change de parcelle et un toucher à deux doigts ouvre le menu.

## L'en-tête et le travail sur la parcelle {#the-head-and-the-work-on-the-field}

::: {.anatomy fig="stat-screen"}
1. **Numéro de parcelle**, entre les signes de **« MINUS »** et **« PLUS »**.
2. **(A)** — c'est la parcelle active, celle dans laquelle le panneau écrit actuellement.
3. **Path** — distance parcourue en semant, en km.
4. **Area** — surface traitée en semant, en ha.
5. **Operating time** — temps passé à semer.
6. **Movement speed** — la vitesse moyenne pendant le semis.
7. **Started / Ended** — quand le travail sur cette parcelle a commencé et s'est terminé.
8. **Seeding** — la surface semée, non semée et inconnue.
9. **Seed sensors** — un bloc par capteur suit.
10. **s, n, ?** — la part de surface semée, non semée et inconnue pour ce capteur.
11. **Barre** — les mêmes parts en couleur : vert semé, rouge non semé, gris inconnu.
12. **Barre de défilement** — où vous en êtes dans le rapport.

Le rapport de la parcelle 1, la parcelle active, en vue courte.
:::

**Unknown** (inconnue) est la surface parcourue pendant qu'un capteur n'avait pas de liaison ou était hors surveillance. En mode **« Flow »** (débit), **not sown** (non semée) est la surface où le capteur n'a vu aucun débit ; en mode **« Precise »** (précis), c'est la surface d'un manque multipliée par le nombre de manques.

## Blocs que vous pouvez aussi voir {#blocks-you-may-also-see}

| **Bloc** | **Ce qu'il contient** |
| --- | --- |
| Produits au poids | Par produit : le poids appliqué, réel par rapport à la consigne en kg/ha et en pour cent, et la distance, la part et le nombre d'écarts au-delà de **« Product rate error,% »** (erreur de dose du produit, %). |
| **« Work without alarms control »** (travail sans surveillance des alarmes) | Trajet, surface et part, temps et vitesse parcourus en semant sans que les alarmes soient surveillées — valeur réglée trop haute, ou réglée haut volontairement. |
| **« Speed control »** (contrôle de la vitesse) | **« Path, slow »** et **« Path, fast »** : distance et part parcourues hors des limites de vitesse. Seulement avec le contrôle de vitesse activé. |
| **« Fertilizing »** (fertilisation) | Surface fertilisée, non fertilisée et inconnue. |
| Par capteur de graines, en vue complète | La distance, la part et le nombre de fois où le rang est passé sous le seuil d'alarme. |

> **IMPORTANT**
>
> **Le poids n'est juste qu'après un étalonnage.** Étalonnez de nouveau le doseur après avoir changé le rouleau doseur, réglé le variateur ou la boîte de vitesses, ou changé de semence.

## En mode « Precise » {#in-the-precise-mode}

![Le bloc Seeding en mode Precise.](figures/stat-precise)

Le bloc **« Seeding »** ajoute **« Seeds sown (x1000) »** (graines semées, ×1000) ; **« Quality »** (qualité, les graines isolées), **« Doubles »** (doubles) et **« Skips »** (manques) pendant le semis, et **« Not sown »** (non semé) — les manques sur les tronçons où rien n'a été semé — chacun en part de toutes les graines et manques ; et **« Population,ks/Ha »** (population, ks/ha) et **« Rate, s/m »** (dose, s/m), chacun dans les colonnes **« Factical »** (réel) et **« Setuped »** (réglé), avec le rapport en pour cent. Chaque capteur de graines ajoute ses graines, sa qualité, ses doubles et ses manques, sa population et sa dose, et les distances parcourues sous et au-dessus de l'écart admis. **« Seeds sown (x1000) »** apparaît aussi dans les autres modes avec **« Count seeds always »** (toujours compter les graines) activé.

La dose réelle ne compte que le trajet où des graines ont circulé ; la population compte tout le trajet. Leurs écarts peuvent donc différer.

## Le menu de l'écran {#the-menu-of-the-screen}

Appuyez sur **« MENU »**.

![Le menu de l'écran Statistics.](figures/stat-menu)

| **Élément** | **Ce qu'il fait** |
| --- | --- |
| **« Select field »** (sélectionner la parcelle) | Fait de la parcelle affichée la parcelle active — voir [Commencer une nouvelle parcelle](start-a-new-field.md). Affiché seulement sur une parcelle qui n'est pas active. |
| **« Statistics »** | Vue **« Short »** (courte) ou **« Full »** (complète). Non affiché sans capteur de vitesse. |
| **« Mileage »** (kilométrage) | Trajet et surface sur toute la vie du système ; ils ne peuvent pas être remis à zéro. Sans capteur de vitesse, la durée de fonctionnement. |
| **« Save to SD-card »** (enregistrer sur la carte SD) | Affiché lorsqu'une carte mémoire est prête. Le micrologiciel 2.2.8 n'enregistre pas encore le rapport et répond par un message d'échec. |
| **« Zero statistics »** (remettre les statistiques à zéro) | Efface la parcelle affichée. Au niveau Operator, le panneau demande le code d'un niveau supérieur ; au-dessus, **« Are you sure? »** (êtes-vous sûr ?). |

![Le kilométrage cumulé du système.](figures/stat-distance)
