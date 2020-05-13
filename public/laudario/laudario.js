let exame = ""
let listaColuna = true;

let exames = {

    tomografia: {
        
        abdomen: [
            {
                nome: "Abdomen Total",
                texto:"Exame normal",
                tags:"VB- / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\n TÉCNICA:\n Exame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\n RELATÓRIO:\n Fígado de dimensões, contornos e coeficientes de atenuação habituais.\n Não há sinais de dilatação das vias biliares intra ou extra-hepáticas.\n Pâncreas com dimensões, contorno e densidade normais.\n Baço de densidade homogênea e dimensões anatômicas .Adrenais com forma, densidade e dimensões normais.\n Rins tópicos, de contornos e dimensões normais, sem cálculos ou dilatação do sistema coletor.\n Ausência de linfonodomegalias.\n Aorta de calibre e contornos normais.\n Bexiga com boa capacidade e contornos regulares.\n \n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos antes e após a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\nRESULTADO:\nFígado de dimensões, contornos e coeficientes de atenuação habituais.\nNão há sinais de dilatação das vias biliares intra ou extra-hepáticas.\nBaço de densidade homogênea e dimensões anatômicas.\nAdrenais com forma, densidade e dimensões normais.\nRins tópicos, de contornos e dimensões normais, com concentração adequada do meio de contraste. Não há sinais de dilatação pielocalicinal ou de litíase.\nAusência de linfonodomegalias.\nAorta de calibre e contornos normais.\nBexiga com boa capacidade e contornos regulares.\n"
            },
            {
                nome: "Abdomen Total",
                texto:"Exame normal",
                tags:"VB+ / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\n TÉCNICA:\n Exame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\n RELATÓRIO:\n Fígado de dimensões, contornos e coeficientes de atenuação habituais.\n Não há sinais de dilatação das vias biliares intra ou extra-hepáticas.\n Vesícula biliar de contornos regulares, sem evidência de cálculos densos.\n Pâncreas com dimensões, contorno e densidade normais.\n Baço de densidade homogênea e dimensões anatômicas .Adrenais com forma, densidade e dimensões normais.\n Rins tópicos, de contornos e dimensões normais, sem cálculos ou dilatação do sistema coletor.\n Ausência de linfonodomegalias.\n Aorta de calibre e contornos normais.\n Bexiga com boa capacidade e contornos regulares.\n \n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos antes e após a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\nRESULTADO:\nFígado de dimensões, contornos e coeficientes de atenuação habituais.\nNão há sinais de dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar de contornos regulares, sem evidência de cálculos densos.\nPâncreas com dimensões, contorno e densidade normais.\nBaço de densidade homogênea e dimensões anatômicas.\nAdrenais com forma, densidade e dimensões normais.\nRins tópicos, de contornos e dimensões normais, com concentração adequada do meio de contraste. Não há sinais de dilatação pielocalicinal ou de litíase.\nAusência de linfonodomegalias.\nAorta de calibre e contornos normais.\nBexiga com boa capacidade e contornos regulares.\n"
            },
            {
                nome: "Abdomen Superior",
                texto:"Exame normal",
                tags:"VB- / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\n TÉCNICA:\n Exame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\n RELATÓRIO:\n Fígado de dimensões, contornos e coeficientes de atenuação habituais.\n Não há sinais de dilatação das vias biliares intra ou extra-hepáticas.\n Pâncreas com dimensões, contorno e densidade normais.\n Baço de densidade homogênea e dimensões anatômicas .Adrenais com forma, densidade e dimensões normais.\n Rins tópicos, de contornos e dimensões normais, sem cálculos ou dilatação do sistema coletor.\n Ausência de linfonodomegalias.\n Aorta de calibre e contornos normais.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos antes e após a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\nRESULTADO:\nFígado de dimensões, contornos e coeficientes de atenuação habituais.\nNão há sinais de dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar de contornos regulares, sem evidência de cálculos densos.\nPâncreas com dimensões, contorno e densidade normais.\nBaço de densidade homogênea e dimensões anatômicas.\nAdrenais com forma, densidade e dimensões normais.\nRins tópicos, de contornos e dimensões normais, com concentração adequada do meio de contraste. Não há sinais de dilatação pielocalicinal ou de litíase.\nAusência de linfonodomegalias.\nAorta de calibre e contornos normais."
            },
            {
                nome: "Abdomen Superior",
                texto:"Exame normal",
                tags:"VB+ / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\n TÉCNICA:\n Exame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\n RELATÓRIO:\n Fígado de dimensões, contornos e coeficientes de atenuação habituais.\n Não há sinais de dilatação das vias biliares intra ou extra-hepáticas.\n Vesícula biliar de contornos regulares, sem evidência de cálculos densos.\n Pâncreas com dimensões, contorno e densidade normais.\n Baço de densidade homogênea e dimensões anatômicas .Adrenais com forma, densidade e dimensões normais.\n Rins tópicos, de contornos e dimensões normais, sem cálculos ou dilatação do sistema coletor.\n Ausência de linfonodomegalias.\n Aorta de calibre e contornos normais.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO ABDOME E PELVE\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos antes e após a administração venosa do meio de contraste iodado, sem opacificação prévia do trato gastrointestinal.\n\nRESULTADO:\nFígado de dimensões, contornos e coeficientes de atenuação habituais.\nNão há sinais de dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar de contornos regulares, sem evidência de cálculos densos.\nPâncreas com dimensões, contorno e densidade normais.\nBaço de densidade homogênea e dimensões anatômicas.\nAdrenais com forma, densidade e dimensões normais.\nRins tópicos, de contornos e dimensões normais, com concentração adequada do meio de contraste. Não há sinais de dilatação pielocalicinal ou de litíase.\nAusência de linfonodomegalias.\nAorta de calibre e contornos normais.\nBexiga com boa capacidade e contornos regulares."
            },
            {
                nome: "Pelve feminina",
                texto:"Exame normal",
                tags:"Pelve Feminina",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA PELVE FEMININA\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado.\n\nRELATÓRIO\nBexiga com boa capacidade e contornos regulares.\nNão há evidências de linfonodomegalias ou formações expansivas pélvicas.\nLoja uterina sem particularidades. Anexos livres.\nNão há evidências de líquido livre na cavidade peritoneal.\nAmpola retal preservada.\nFossas isquiorretais livres.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA PELVE FEMININA\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos com a administração venosa do meio de contraste iodado.\n\nRELATÓRIO:\nBexiga com boa capacidade e contornos regulares.\nNão há evidências de linfonodomegalias ou formações expansivas pélvicas.\nLoja uterina sem particularidades. Anexos livres.\nNão há evidências de líquido livre na cavidade peritoneal.\nAmpola retal preservada.\nFossas isquiorretais livres."
            },
            {
                nome: "Pelve MASCULINA",
                texto:"Exame normal",
                tags:"Pelve Maculina",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA PELVE MASCULINA\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos sem a administração venosa do meio de contraste iodado.\n\nRELATÓRIO:\nBexiga com boa capacidade e contornos regulares.\nNão há evidências de linfonodomegalias ou formações expansivas pélvicas.\nVesículas seminais simétricas.\nPróstata de dimensões, contornos e densidade normais.\nNão há evidências de líquido livre na cavidade peritoneal.\nAmpola retal preservada.\nFossas isquiorretais livres.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA PELVE MASCULINA\n\nTÉCNICA:\nExame realizado com cortes axiais obtidos com a administração venosa do meio de contraste iodado.\n\nRELATÓRIO:\nBexiga com boa capacidade e contornos regulares.\nNão há evidências de linfonodomegalias ou formações expansivas pélvicas.\nVesículas seminais simétricas.\nPróstata de dimensões, contornos e densidade normais.\nNão há evidências de líquido livre na cavidade peritoneal.\nAmpola retal preservada.\nFossas isquiorretais livres."
            },
            {
                nome: "Urotomografia",
                texto:"Exame normal",
                tags:"Urotomografia / Com Opinião",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE RINS E VIAS URINÁRIAS ( UROTOMOGRAFIA )\n\nTÉCNICA:\nExame realizado em aparelho de tomografia computadorizada, com colimação, filtros e reconstruções específicas para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nRELATÓRIO:\nRins tópicos, de contornos regulares, com dimensões e espessura do parênquima normais, sem sinais de dilatação das cavidades coletoras.\nAmbos os rins apresentam concentração e excreção adequada do meio de contraste iodado.\nNão há cálculos radiopacos nos rins e trajetos ureterais.\nBexiga urinária com boa repleção, de contornos regulares, paredes finas e lisas, conteúdo liquido habitual. Avaliação sucinta das demais estruturas não revela anormalidades significativas para o protocolo proposto.\nComo achados adicionais em relação ao estudo do abdome e da pelve, evidencia-se:\n\nOPINIÃO:\nExame de urotomografia computadorizada dentro dos limites da normalidade."
            },
            {
                nome: "COLONOGRAFIA",
                texto:"Exame normal",
                tags:"Colonografia / Com Opinião",
                laudo_SemContraste:"COLONOGRAFIA POR TOMOGRAFIA COMPUTADORIZADA (COLONOSCOPIA VIRTUAL)\n\n Indicação: colonoscopia convencional incompleta.\n Método: Obtidas imagens axiais por metodologia multislice, sem a injeção intravenosa do meio de contraste. Realizados previamente preparo e insuflação do cólon. Contraste VO (positivo).\n\n Análise:\nCólon visualizado em toda sua extensão, com calibre preservado. Observa-se área de angulação e redução do calibre luminal do cólonLesão infiltrativa, circunferencial e estenosante, situada no cólon ________ , com extensão aproximada de ________ Linfonodos regionais medindo até.....\n Imagem polipóide ______ , medindo ______ , situada no cólon ______\n Não se observam pólipos maiores que 5 mm.\n Preparo intestinal inadequado\ insuflação insuficiente. As características mencionadas podem diminuir a sensibilidade para detecção de eventuais lesões planas e polipóides pequenas. Não se caracterizam imagens polipóides com dimensões acima de 10 mm.\n Não há sinais de lesões estenosantes ou infiltrativas.\n\nOPINIÃO:\nExame de urotomografia computadorizada dentro dos limites da normalidade.",
                laudo_ComContraste:"COLONOGRAFIA POR TOMOGRAFIA COMPUTADORIZADA (COLONOSCOPIA VIRTUAL)\n\n Indicação: colonoscopia convencional incompleta.\n Método: Obtidas imagens axiais por metodologia multislice, com a injeção intravenosa do meio de contraste. Realizados previamente preparo e insuflação do cólon. Contraste VO (positivo).\n\n Análise:\nCólon visualizado em toda sua extensão, com calibre preservado. Observa-se área de angulação e redução do calibre luminal do cólonLesão infiltrativa, circunferencial e estenosante, situada no cólon ________ , com extensão aproximada de ________ Linfonodos regionais medindo até.....\n Imagem polipóide ______ , medindo ______ , situada no cólon ______\n Não se observam pólipos maiores que 5 mm.\n Preparo intestinal inadequado\ insuflação insuficiente. As características mencionadas podem diminuir a sensibilidade para detecção de eventuais lesões planas e polipóides pequenas. Não se caracterizam imagens polipóides com dimensões acima de 10 mm.\n Não há sinais de lesões estenosantes ou infiltrativas.\n\nOPINIÃO:\nExame de urotomografia computadorizada dentro dos limites da normalidade."
            },
        
        ],
        cranio:[
            {
                nome: "CRANIO",
                texto:"Exame normal",
                tags:"Cranio Jovem / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nNão há áreas de realce anômalo após a administração do contraste intravenoso."
            },
            {
                nome: "CRANIO",
                texto:"Exame normal",
                tags:"Cranio Jovem / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nNão há áreas de realce anômalo após a administração do contraste intravenoso.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "CRANIO IDOSO",
                texto:"Normal para a idade",
                tags:"Cranio Idoso / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas para a idade.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas para a idade.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nNão há áreas de realce anômalo após a administração do contraste intravenoso.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "CRANIO IDOSO",
                texto:"Normal Idade + ateromatose",
                tags:"Cranio Idoso / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas para a idade.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\n\nOPINIÃO\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nSulcos e cisternas encefálicas preservadas para a idade.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral e cerebelo com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\nNão há áreas de realce anômalo após a administração do contraste intravenoso.\n\nOPINIÃO\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar."
            },
            {
                nome: "CRANIO IDOSO ATROFIA",
                texto:"Atrofia Idade + ateromatose + Atrofia normal para a idade",
                tags:"Cranio Idoso / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nProeminência das fissuras de silvianas e dos sulcos entre os giros corticais, bem como dos sulcos entre as folia cerebelares, associada a dilatação compensatória do sistema ventricular supratentorial, habitual para faixa etária do paciente.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\n\nOPINIÃO\nAlteração volumétrica encefálica global sem predomínio lobar de aspecto habitual para faixa etária.\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nProeminência das fissuras de silvianas e dos sulcos entre os giros corticais, bem como dos sulcos entre as folia cerebelares, associada a dilatação compensatória do sistema ventricular supratentorial, habitual para faixa etária do paciente.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\nNão há áreas de realce anômalo após a administração do contraste intravenoso.\n\nOPINIÃO\nAlteração volumétrica encefálica global sem predomínio lobar de aspecto habitual para faixa etária.\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar."
            },
            {
                nome: "CRANIO IDOSO ATROFIA",
                texto:"Atrofia Idade + ateromatose + Atrofia + Microangiopatia",
                tags:"Cranio Idoso / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais sem a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nProeminência das fissuras de silvianas e dos sulcos entre os giros corticais, bem como dos sulcos entre as folia cerebelares, associada a dilatação compensatória do sistema ventricular supratentorial, habitual para faixa etária do paciente.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\n Hipoatenuação da substância branca periventricular e do centro semioval de ambos os hemisférios cerebrais, sem efeito expansivo ou atrófico, de aspecto inespecífico.\nTronco cerebral com morfologia e coeficientes de atenuação normais.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\n\nOPINIÃO\nAlteração volumétrica encefálica global sem predomínio lobar.\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar.\nAlteração inespecífica da substância branca provavelmente relacionada à leucomicroangiopatia/gliose.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO CRANIO\n\nTÉCNICA\nRealizados cortes axiais antes e após a administração intravenosa do meio de contraste iodado hidrossolúvel.\n\nRELATÓRIO\nEstruturas da calota craniana preservada.\nNão há evidência de focos de hemorragia aguda intraparenquimatosa, coleções líquidas extra-axiais acima ou abaixo do tentório.\nProeminência das fissuras de silvianas e dos sulcos entre os giros corticais, bem como dos sulcos entre as folia cerebelares, associada a dilatação compensatória do sistema ventricular supratentorial, habitual para faixa etária do paciente.\nVentrículos laterais, III e IV ventrículos com morfologia, dimensões e topografia normais.\nTronco cerebral com morfologia e coeficientes de atenuação normais.\nHipoatenuação da substância branca periventricular e do centro semioval de ambos os hemisférios cerebrais, sem efeito expansivo ou atrófico, de aspecto inespecífico.\nParênquima cerebral com morfologia e coeficientes de atenuação normais.\nCalcificações ateromatosas parietais no segmento carotídeo intracraniano e no sistema vertebrobasilar.\nNão há áreas de realce anômalo após a administração do contraste intravenoso.\n\nOPINIÃO\nAlteração volumétrica encefálica global sem predomínio lobar.\nAteromatose do segmento carotídeo intracraniano e sistema vertebrobasilar.\nAlteração inespecífica da substância branca provavelmente relacionada à leucomicroangiopatia/gliose."
            },
            {
                nome: "ANGIOTOMOGRAFIA",
                texto:"Angiotomografia Arterial",
                tags:"Arterial",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ANGIOTOMOGRAFIA DOS VASOS CERVICAIS\n\nTÉCNICA:\nCortes tomográficos computadorizados obtidos em aparelho multislice, após a injeção intravenosa do meio de contraste iodado hidrossolúvel não iônico.Foram realizados reformações multiplanares e tridimensionais.\n\nANALISE:\nArco aórtico, troncos arteriais supra-aórticos, artérias subclávias, artérias carótidas comuns, bulbos carotídeos, artérias carótidas internas e externas bem como artérias vertebrais pérvias e bem opacificadas, com morfologia e trajetos habituais.\nAs artérias vertebrais, basilar e seus ramos principais têm morfologia, trajeto e opacificação pelo contraste habituais, com calcificações parietais esparsas.\nAs artérias carótidas internas tem morfologia, trajeto e opacificação pelo contraste habituais, com calcificações parietais esparsas.\nNão foram caracterizados aneurismas ou outras malformações vasculares intracranianas bem como realces anômalos após a administração intravenosa do meio de contraste iodado.\nA angiotomografia computadorizada apresenta sensibilidade limitada para visibilização de aneurismas menores que 3 mm, sendo conveniente prosseguir investigação com angiografia digital.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "ANGIOTOMOGRAFIA",
                texto:"Angiotomografia Arterial e Venosa",
                tags:"Arterial e Venosa",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ANGIOTOMOGRAFIA COMPUTADORIZADA ARTERIAL E VENOSA DOS VASOS INTRACRANIANOS\n\nTÉCNICA:\nExame realizado em aparelho multidetectores, através de aquisições axiais e recontruções multiplanares, antes e após a injeção do meio de contraste iodado endovenoso.\n\nANÁLISE:\nArtérias do polígono de Willis com morfologia, calibre e contornos preservados.\nNão há sinais de aneurismas ou estenoses dentro dos limites de resolução do método.\nArtéria basilar de aspecto preservado.\nArtéria vertebral esquerda dominante (variação anatômica).\nArtérias cerebrais médias, anteriores e posteriores apresentam-se com calibre e contornos preservados.\nSeio sagital superior, seios transversos e sigmóides pérvios, de calibre preservado, sem sinais de falhas de enchimento.\nSeio reto e veias cerebrais internas pérvias, com contrastação homogênea.\nVeias corticais avaliadas sem particularidades.\n\nOPINIÃO:\nExame de angiotomografia arterial e venosa dos vasos intracranianos dentro dos limites da normalidade."
            },
        ],
        musculoesqueletico:[
            {
                nome: "JOELHO DIREITO",
                texto:"Normal",
                tags:"joelho direito ",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "JOELHO ESQUERDO",
                texto:"Normal",
                tags:"joelho esquerdo ",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "JOELHO DIREITO",
                texto:"Artrose",
                tags:"joelho direito / Artrose",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nArtropatia degenerativa bicompartimental localizada nos compartimentos femuro tibiais predominando no medial e caracterizada por redução do espaço articular, esclerose óssea, cistos subcondrais e osteófitos marginais.\nNão há sinais de fraturas.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nArtropatia degenerativa do joelho.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nArtropatia degenerativa bicompartimental localizada nos compartimentos femuro tibiais predominando no medial e caracterizada por redução do espaço articular, esclerose óssea, cistos subcondrais e osteófitos marginais.\nNão há sinais de fraturas.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nArtropatia degenerativa do joelho."
            },
            {
                nome: "JOELHO ESQUERDO",
                texto:"Artrose",
                tags:"joelho esquerdo / Artrose",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nArtropatia degenerativa bicompartimental localizada nos compartimentos femuro tibiais predominando no medial e caracterizada por redução do espaço articular, esclerose óssea, cistos subcondrais e osteófitos marginais.\nNão há sinais de fraturas.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nArtropatia degenerativa do joelho.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE JOELHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nArtropatia degenerativa bicompartimental localizada nos compartimentos femuro tibiais predominando no medial e caracterizada por redução do espaço articular, esclerose óssea, cistos subcondrais e osteófitos marginais.\nNão há sinais de fraturas.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nArtropatia degenerativa do joelho."
            },
            {
                nome: "JOELHO (MEDIDA TAGT)",
                texto:"Normal",
                tags:"TAGT",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DE JOELHO (MEDIDAS DE TAGT)\n TÉCNICA\n Os cortes tomográficos computadorizados foram obtidos no plano axial, na hiperextensão e com 15º, 30º e 45º de flexão.\n RELATÓRIO\n Sulcos trocleares bem formados.\n Sulco das trócleas femorais rasos nas suas porções superiores.\n Tróclea rasa (<>º).\n Patelas com facetas mediais curtas e convexas.\n Patelas com facetas mediais curtas e convexas, ocupando posição alta em relação ao índice de Blumensaat.\n Sinais de displasia femoropatelar <> caracterizados por sulco da tróclea femoral raso associado à faceta medial da patela curta e convexa, e presença de esporão supratroclear.\n Afilamento do ligamento patelofemoral medial <>.\n Não há sinais de subluxação ou de inclinação lateral das patelas na hiperextensão ou nos diversos graus de flexão estudados.\n Demais estruturas ósseas conservadas.\n FRASES\n Não há inclinação lateral das patelas.\n Inclinação lateral da patela <> somente com a hiperextensão do joelho.\n Inclinação lateral da patela <> na hiperextensão e com 15 graus de flexão com retorno ao posicionamento habitual nos demais graus de flexão.\n Inclinação lateral da patela <> na hiperextensão, com 15 e 30 graus de flexão, com retorno ao posicionamento habitual em 45 graus de flexão.\n Inclinação lateral da patela <> na hiperextensão e em todos os graus de flexão estudados.\n Em extensão nota-se ___________(centralização / lateralização) das patelas, _________(com/sem) báscula da patela.\n Em flexão de 15º as patelas encontram-se centradas e sem báscula.\n Em flexão de 15º _________(persiste/ não se verifica) a ___________(centralização / lateralização) das patelas, _________(com/sem) báscula da patela.\n Em flexão de 30º as patelas encontram-se centradas e sem báscula.\n Em flexão de 30º _________(persiste/ não se verifica) a ___________(centralização / lateralização) das patelas, _________(com/sem) báscula da patela.\n A patela <> se encontra subluxada lateralmente apenas na hiperextensão, voltando a posição normal nos demais graus de flexão.\n A patela <> se encontra subluxada lateralmente na hiperextensão e com 15 graus de flexão, com correção do seu posicionamento em 30 e 45 graus.\n A patela <> se encontra subluxada lateralmente na hiperextensão, com 15 e 30 graus de flexão, com correção do seu posicionamento em 45 graus.\n Subluxação lateral da patela <> na hiperextensão e com 15º de flexão. Houve retorno ao posicionamento habitual com 30º de flexão e hipercorreção medial com 45º de flexão.\n Alteração cirúrgica no joelho <> com sinais de osteotomia na porção medial da patela e face medial do côndilo femoral medial.\n Alteração cirúrgica no joelho <> com sinais de osteotomia na tuberosidade anterior da tíbia.\n A medida da distância TTA-GT é de <> cm à direita e <> cm à esquerda.\n Medidas de TAGT Valores normais\n Em extensão à direita:__________mm. Normal = 12 +/- 4mm\n Em extensão à esquerda: ________mm. Normal = 12 +/- 4mm\n Em flexão de 30º à direita:_________mm. Normal = 9 +/- 4mm\n Em flexão de 30º à esquerda:_________mm. Normal = 9 +/- 4mm\n Patela do tipo I/II/III de Wiberg, com pequenos cistos subcondrais no vértice e facetas medial e lateral (condropatia grau IV), com altura normal, índice de Caton-Deschamps de <> (normal de 0,8 a 1,2).\n VALORES NORMAIS\n Inclinação: até 20o OU até 7º (depende do método)\n Báscula: <> (normal > 8 graus)\n Subluxação / lateralizarão da patela: - 17 (medial) até + 10 (lateral)TTAGT: até 15mm - 20mm (depende do medico solicitante)\n TTAGT: extensão = 15 +/- 4 mm e flexão = 9 +/- 4 mm\n Sulco da tróclea < 142o\n",
                laudo_ComContraste:"sem exame."
            },
            {
                nome: "Articulação",
                texto:"Normal",
                tags:"Articulação / sem lateralidade ",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE  ____________ \n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE ___________\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "OMBRO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE OMBRO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE OMBRO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "OMBRO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE OMBRO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE OMBRO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "QUADRIL DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE QUADRIL DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE QUADRIL DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "QUADRIL ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE QUADRIL ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE QUADRIL ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "TORNOZELO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE TORNOZELO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE TORNOZELO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "TORNOZELO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE TORNOZELO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE TORNOZELO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "PÉ DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE PÉ DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE PÉ DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "PÉ ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE PÉ ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE PÉ ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "COTOVELO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE COTOVELO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE COTOVELO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "COTOVELO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE COTOVELO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE COTOVELO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "PUNHO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE PUNHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE PUNHO DIREITO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "PUNHO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE PUNHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE PUNHO ESQUERDO\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "MÃO DIREITA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE MÃO DIREITA\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE MÃO DIREITA\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
                nome: "MÃO ESQUERDA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZA DE MÃO ESQUERDA\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice sem a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZA DE MÃO ESQUERDA\n\nTÉCNICA\nForam obtidas imagens em aparelho multislice com a injeção de meio de contraste.\n\nANÁLISE\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas osseas íntegras com morfologia e textura óssea habituais.\nNão há sinais de fraturas.\nEspaços articulares mantidos.\nNão há sinais que sugiram derrame articular.\nEstruturas miotendíneas periarticulares sem anormalidades, salientando a sensibilidade limitada do método para avaliação destas estruturas.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
        ],

        coluna:[

            {
                nome: "Coluna Cervical",
                texto:"Normal",
                tags:"Normal / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA CERVICAL\n\nTÉCNICA\n As imagens de tomografia computadorizada foram obtidas em cortes contíguos desde a base do crânio até o nível de T2, em aparelho multislice com reformação multiplanar.\n\nRELATÓRIO\nTransição crânio-cervical de aspecto anatômico.\nCorpos vertebrais com altura e alinhamento preservados.\nArticulações interapofisárias e uncovertebrais íntegras.\nLâminas, pedículos, processos transversos e espinhosos preservados.\nO canal vertebral apresenta dimensões normais por toda a extensão estudada.\nNão há evidência de herniações ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nNível C2-C3:\n Nível C3-C4:\nNível C4-C5:\nNível C5-C6:\nNível C6-C7:\nNível C7-T1:\nForames de conjugação livres.\n Estruturas paravertebrais de aspecto preservado.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA CERVICAL\n\nTÉCNICA\n As imagens de tomografia computadorizada foram obtidas em cortes contíguos desde a base do crânio até o nível de T2, em aparelho multislice com reformação multiplanar e com a injeção de meio de contraste.\n\nRELATÓRIO\nTransição crânio-cervical de aspecto anatômico.\n Corpos vertebrais com altura e alinhamento preservados.\nArticulações interapofisárias e uncovertebrais íntegras.\n Lâminas, pedículos, processos transversos e espinhosos preservados.\nO canal vertebral apresenta dimensões normais por toda a extensão estudada.\nNão há evidência de herniações ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nNível C2-C3:\nNível C3-C4:\n Nível C4-C5:\nNível C5-C6:\nNível C6-C7:\nNível C7-T1:\nForames de conjugação livres.\nEstruturas paravertebrais de aspecto preservado.\n"
            },
            {
                nome: "Coluna TORÁCICA",
                texto:"Normal",
                tags:"Normal / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA TORÁCICA\n\nTÉCNICA\nAs imagens tomográficas computadorizadas foram obtidas em cortes contíguos de C7 a L2 em aparelho multislice, com reformação multiplanar.\n\nRELATÓRIO\nOs corpos vertebrais dorsais apresentam altura e alinhamento posterior preservados.\nO canal vertebral ósseo é de dimensões normais por toda a extensão estudada.\nNão há evidência definitiva de herniação ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nForames de conjugação livres.\nArticulações costo-vertebrais sem alterações.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA TORÁCICA\n\nTÉCNICA\nAs imagens tomográficas computadorizadas foram obtidas em cortes contíguos de C7 a L2 em aparelho multislice, com reformação multiplanar e com a injeção de meio de contraste.\n\nRELATÓRIO\nOs corpos vertebrais dorsais apresentam altura e alinhamento posterior preservados.\nO canal vertebral ósseo é de dimensões normais por toda a extensão estudada.\nNão há evidência definitiva de herniação ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nForames de conjugação livres.\nArticulações costo-vertebrais sem alterações.\n"
            },
            {
                nome: "Coluna LOMBOSSACRA",
                texto:"Normal",
                tags:"Normal / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA LOMBOSSACRA\n\nTÉCNICA\nAs imagens tomográficas computadorizadas foram obtidas em cortes contíguos de T12 a S3 em aparelho multislice, com reformação multiplanar.\n\nRELATÓRIO\nOs corpos vertebrais lombares apresentam altura e alinhamento posterior preservados.\nLâminas, pedículos, processos transversos e espinhosos preservados.\nArticulações interapofisárias sem alterações.\nO canal vertebral ósseo é de dimensões normais por toda a extensão estudada.\nNão há evidência definitiva de herniação ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nNível T12-L1:\nNível L1-L2:\nNível L2-L3:\nNível L3-L4:\nNível L4-L5:\nNível L5-S1:\nForames de conjugação livres.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA COLUNA LOMBOSSACRA\n\nTÉCNICA\nAs imagens tomográficas computadorizadas foram obtidas em cortes contíguos de T12 a S3 em aparelho multislice, com reformação multiplanar e com a injeção de meio de contraste.\n\nRELATÓRIO\nOs corpos vertebrais lombares apresentam altura e alinhamento posterior preservados.\nLâminas, pedículos, processos transversos e espinhosos preservados.\nArticulações interapofisárias sem alterações.\nO canal vertebral ósseo é de dimensões normais por toda a extensão estudada.\nNão há evidência definitiva de herniação ou protrusões discais significativas, sejam difusas ou localizadas nos interespaços avaliados.\nNível T12-L1:\nNível L1-L2:\nNível L2-L3:\nNível L3-L4:\nNível L4-L5:\nNível L5-S1:\nForames de conjugação livres.\n"
            },

        ],

        cervical_e_SeiosDaFace:[

            {
                nome: "Pescoço / Cervical",
                texto:"Normal",
                tags:"Normal / sem opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO PESCOÇO\n\nTÉCNICA:\nExame de tomografia computadorizada do pescoço realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, sem a injeção do meio de contraste iodado.\n\nANÁLISE:\nGlândulas parótidas e submandibulares com forma, contornos, dimensões e atenuação preservados.\nGlândula tireoide com forma, contornos, dimensões e atenuação preservados.\nEstruturas da faringe e da laringe de aspecto habitual.\nAusência de linfonodomegalias.\nEspaços parafaríngeos e fossas pterigopalatinas sem alterações.\nPlanos musculares e adiposos preservados.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO PESCOÇO\n\nTÉCNICA:\nExame de tomografia computadorizada do pescoço realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, antes e após a injeção do meio de contraste iodado.\n\nANÁLISE:\nGlândulas parótidas e submandibulares com forma, contornos, dimensões e atenuação preservados.\nGlândula tireoide com forma, contornos, dimensões e atenuação preservados.\nEstruturas da faringe e da laringe de aspecto habitual.\nAusência de linfonodomegalias.\nEspaços parafaríngeos e fossas pterigopalatinas sem alterações.\nPlanos musculares e adiposos preservados.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n"
            },
            {
                nome: "Pescoço / Cervical",
                texto:"Normal",
                tags:"Normal / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO PESCOÇO\n\nTÉCNICA:\nExame de tomografia computadorizada do pescoço realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, sem a injeção do meio de contraste iodado.\n\nANÁLISE:\nGlândulas parótidas e submandibulares com forma, contornos, dimensões e atenuação preservados.\nGlândula tireoide com forma, contornos, dimensões e atenuação preservados.\nEstruturas da faringe e da laringe de aspecto habitual.\nAusência de linfonodomegalias.\nEspaços parafaríngeos e fossas pterigopalatinas sem alterações.\nPlanos musculares e adiposos preservados.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nCONCLUSÃO:\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO PESCOÇO\n\nTÉCNICA:\nExame de tomografia computadorizada do pescoço realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, antes e após a injeção do meio de contraste iodado.\n\nANÁLISE:\nGlândulas parótidas e submandibulares com forma, contornos, dimensões e atenuação preservados.\nGlândula tireoide com forma, contornos, dimensões e atenuação preservados.\nEstruturas da faringe e da laringe de aspecto habitual.\nAusência de linfonodomegalias.\nEspaços parafaríngeos e fossas pterigopalatinas sem alterações.\nPlanos musculares e adiposos preservados.\n\nCONCLUSÃO:\nExame dentro dos limites da normalidade."
            },
            {
                nome: "ÓRBITAS",
                texto:"Normal",
                tags:"Normal / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ÓRBITAS\n\nTÉCNICA:\nExame de tomografia computadorizada das órbitas realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, sem a injeção do meio de contraste iodado.\n\nANÁLISE:\nBulbos oculares de contornos e atenuação preservados.\nGlândulas lacrimais com aspecto conservado.\nNervos ópticos com aspecto habitual.\nMusculatura ocular extrínseca sem alterações.\nEspaços intra e extraconais de aspecto habitual.\nNão há sinais de deiscências das lâminas papiráceas, canais carotídeos e ópticos.\nSeios cavernosos bem opacificados, sem alterações aparentes.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nCONCLUSÃO:\nExame das órbitas dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ÓRBITAS\n\nTÉCNICA:\nExame de tomografia computadorizada das órbitas realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, antes e após a injeção do meio de contraste iodado.\n\nANÁLISE:\nBulbos oculares de contornos e atenuação preservados.\nGlândulas lacrimais com aspecto conservado.\nNervos ópticos com aspecto habitual.\nMusculatura ocular extrínseca sem alterações.\nEspaços intra e extraconais de aspecto habitual.\nNão há sinais de deiscências das lâminas papiráceas, canais carotídeos e ópticos.\nSeios cavernosos bem opacificados, sem alterações aparentes.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nCONCLUSÃO:\nExame das órbitas dentro dos limites da normalidade.\n"
            },
            {
                nome: "OSSOS TEMPORAIS",
                texto:"Normal",
                tags:"Normal / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DOS OSSOS TEMPORAIS\n\nTÉCNICA:\nExame de tomografia computadorizada dos ossos temporais realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, sem a injeção do meio de contraste iodado.\n\nANÁLISE:\nCondutos auditivos externos com morfologia preservada.\nPneumatização normal das mastoides.\nEsporões, espaços de Prussak, cadeias ossiculares e cavidades timpânicas de aspecto habitual.\nCócleas, vestíbulos, canais semicirculares, janelas redondas e ovais com morfologia preservada.\nCondutos auditivos internos e aquedutos vestibulares sem alterações.\nCanais dos nervos faciais íntegros.\n\nCONCLUSÃO:\nExame dos ossos temporais dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DOS OSSOS TEMPORAIS\n\nTÉCNICA:\nExame de tomografia computadorizada dos ossos temporais realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, com a injeção do meio de contraste iodado.\n\nANÁLISE:\nCondutos auditivos externos com morfologia preservada.\nPneumatização normal das mastoides.\nEsporões, espaços de Prussak, cadeias ossiculares e cavidades timpânicas de aspecto habitual.\nCócleas, vestíbulos, canais semicirculares, janelas redondas e ovais com morfologia preservada.\nCondutos auditivos internos e aquedutos vestibulares sem alterações.\nCanais dos nervos faciais íntegros.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nCONCLUSÃO:\nExame dos ossos temporais dentro dos limites da normalidade.\n"
            },
            {
                nome: "SEIOS DA FACE",
                texto:"Normal",
                tags:"Normal / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DOS SEIOS DA FACE\n\nMÉTODO:\nExame de tomografia computadorizada dos seios da face realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, sem a injeção do meio de contraste iodado.\n\nANÁLISE:\nCavidades paranasais com desenvolvimento e aeração dentro dos padrões da normalidade.\nComplexos ostiomeatais com aspectos anatômicos normais e permeáveis.\nConchas nasais de forma e dimensões dentro da normalidade.\nMeatos e fossas nasais livres.\nSepto nasal sem desvios significativos.\nRegiões coanais de aspecto preservado.\nNão há evidências de deiscências das lâminas papiráceas, canais ópticos e canais carotídeos.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DOS SEIOS DA FACE\n\nMÉTODO:\nExame de tomografia computadorizada dos seios da face realizado com técnica multislice, com aquisição no plano axial e posteriores reformatações multiplanares, com a injeção do meio de contraste iodado.\n\nANÁLISE:\nCavidades paranasais com desenvolvimento e aeração dentro dos padrões da normalidade.\nComplexos ostiomeatais com aspectos anatômicos normais e permeáveis.\nConchas nasais de forma e dimensões dentro da normalidade.\nMeatos e fossas nasais livres.\nSepto nasal sem desvios significativos.\nRegiões coanais de aspecto preservado.\nNão há evidências de deiscências das lâminas papiráceas, canais ópticos e canais carotídeos.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nOPINIÃO:\nExame dentro dos limites da normalidade."
            },
            {
                nome: "FACE",
                texto:"Normal",
                tags:"Normal / com opinião",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DA FACE\n\nTÉCNICA\nExame realizado com cortes volumétricos com aquisição por multidetectores, sem a administração endovenosa do meio de contraste iodado.\n\nRELATÓRIO\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas ósseas integras.\nOs seios frontais, maxilares, etmoidais e esfenoidais têm morfologia e aeração normais.\nComplexos óstio–meatais e recessos esfeno–etmoidais livres.\nAusência de desvios significativos do septo nasal.\nOs cornetos nasais têm morfologia e coeficientes de atenuação normais.\nAs estruturas intra–orbitárias têm morfologia e coeficientes de atenuação normais.\nOs contornos da cavidade aérea da rinofaringe são simétricos e têm configuração anatômica.\nAspecto anatômico das fossas infra–temporais e ptérigo–palatinas.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DA FACE\n\nTÉCNICA\nExame realizado com cortes volumétricos com aquisição por multidetectores, com a administração endovenosa do meio de contraste iodado.\n\nRELATÓRIO\nPele e tecido celular subcutâneo de aspecto preservado.\nEstruturas ósseas integras.\nOs seios frontais, maxilares, etmoidais e esfenoidais têm morfologia e aeração normais.\nComplexos óstio–meatais e recessos esfeno–etmoidais livres.\nAusência de desvios significativos do septo nasal.\nOs cornetos nasais têm morfologia e coeficientes de atenuação normais.\nAs estruturas intra–orbitárias têm morfologia e coeficientes de atenuação normais.\nOs contornos da cavidade aérea da rinofaringe são simétricos e têm configuração anatômica.\nAspecto anatômico das fossas infra–temporais e ptérigo–palatinas.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "ARTICULAÇÕES TEMPORO MANDIBULARES",
                texto:"Normal",
                tags:" com opinião / + Com Abertura bucal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ARTICULAÇÕES TEMPOROMANDIBULARES\n\nMÉTODO:\nExame de tomografia computadorizada das articulações temporomandibulares realizado com técnica multislice, com aquisição no plano axial e posterior reformatações multiplanares, sem a injeção do meio de contraste iodado, em repouso e com manobra de abertura bucal.\n\nANÁLISE:\nCôndilos mandibulares, cavidades articulares, superfícies articulares e eminências temporais com forma, contornos e atenuação habituais.\nBoa excursão mandibular com a manobra de abertura bucal.\nAusência de lesões líticas ou blásticas.\nAusência de sinais de fraturas.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ARTICULAÇÕES TEMPOROMANDIBULARES\n\nMÉTODO:\nExame de tomografia computadorizada das articulações temporomandibulares realizado com técnica multislice, com aquisição no plano axial e posterior reformatações multiplanares, com a injeção do meio de contraste iodado, em repouso e com manobra de abertura bucal.\n\nANÁLISE:\nCôndilos mandibulares, cavidades articulares, superfícies articulares e eminências temporais com forma, contornos e atenuação habituais.\nBoa excursão mandibular com a manobra de abertura bucal.\nAusência de lesões líticas ou blásticas.\nAusência de sinais de fraturas.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "ARTICULAÇÕES TEMPORO MANDIBULARES",
                texto:"Normal",
                tags:"Sem Abertura bucal",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ARTICULAÇÕES TEMPOROMANDIBULARES\n\nMÉTODO:\nExame de tomografia computadorizada das articulações temporomandibulares realizado com técnica multislice, com aquisição no plano axial e posterior reformatações multiplanares, sem a injeção do meio de contraste iodado, em repouso mas sem a manobra de abertura bucal.\n\nANÁLISE:\nCôndilos mandibulares, cavidades articulares, superfícies articulares e eminências temporais com forma, contornos e atenuação habituais.\nBoa excursão mandibular com a manobra de abertura bucal.\nAusência de lesões líticas ou blásticas.\nAusência de sinais de fraturas.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DAS ARTICULAÇÕES TEMPOROMANDIBULARES\n\nMÉTODO:\nExame de tomografia computadorizada das articulações temporomandibulares realizado com técnica multislice, com aquisição no plano axial e posterior reformatações multiplanares, com a injeção do meio de contraste iodado, em repouso mas sem a manobra de abertura bucal.\n\nANÁLISE:\nCôndilos mandibulares, cavidades articulares, superfícies articulares e eminências temporais com forma, contornos e atenuação habituais.\nBoa excursão mandibular com a manobra de abertura bucal.\nAusência de lesões líticas ou blásticas.\nAusência de sinais de fraturas.\nApós a injeção do meio de contraste iodado não se observam áreas de realce anômalo.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n"
            },
        ],
        torax:[
            {
                nome: "tórax",
                texto:"Normal",
                tags:" Angiotomo inconclusiva / Negativa ",
                laudo_SemContraste:"TOMOGRAFIA COMPUTADORIZADA DO TÓRAX\n\nTÉCNICA\nOs cortes tomográficos computadorizados foram obtidos em série única, sem a utilização de contraste iodado intravenoso.\n\nRELATÓRIO\nTraqueia, brônquios principais e lobares pérvios.\nParênquima pulmonar com transparência preservada.\nNão há sinais de derrame pleural ou efusão pericárdica.\nNão se identificam linfonodomegalias mediastinais.\nCoração e grandes vasos do mediastino com dimensões preservadas.\nEstruturas ósseas do arcabouço torácico de configuração anatômica.\nEspondilopatia degenerativa dorsal.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"TOMOGRAFIA COMPUTADORIZADA DO TÓRAX\n\nTÉCNICA\nOs cortes tomográficos computadorizados foram obtidos antes e durante a infusão intravenosa de contraste iodado.\n\nRELATÓRIO\nTraqueia, brônquios principais e lobares pérvios.\nParênquima pulmonar com transparência preservada.\nNão há sinais de derrame pleural ou efusão pericárdica.\nNão se identificam linfonodomegalias mediastinais.\nCoração e grandes vasos do mediastino com dimensões preservadas.\nEstruturas ósseas do arcabouço torácico de configuração anatômica.\nEspondilopatia degenerativa dorsal.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "ANGIOTOMOGRAFIA",
                texto:"TEP Positivo ",
                tags:["TEP Positivo"],
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ANGIOTOMOGRAFIA COMPUTADORIZADA DO TÓRAX\n\nTÉCNICA\nOs cortes tomográficos computadorizados foram obtidos antes e durante a infusão intravenosa periférica de contraste iodado não-iônico. Foram empregadas as técnicas multislice e de alta resolução. Protocolo para pesquisa de tromboembolismo pulmonar.\n\nRELATÓRIO\nTronco da artéria pulmonar, artérias pulmonares direita e esquerda com calibre e contrastação normais.\nTronco da artéria pulmonar, artérias pulmonares direita e esquerda com evidencias de falhas de enchimento ao protocolo sugestivas de trombo pulmonar.\nTronco da artéria pulmonar com evidencias de falhas de enchimento ao protocolo sugestivas de trombo pulmonar.\nArtéria pulmonar direita com evidencias de falhas de enchimento ao protocolo sugestivas de trombo pulmonar.\nArtéria pulmonar esquerda com evidencias de falhas de enchimento ao protocolo sugestivas de trombo pulmonar\n\nRamos segmentares e subsegmentares das artérias pulmonares de configuração habitual, sem evidencias de falhas de enchimento ou obstrução detectáveis ao protocolo.\nRamos segmentares e subsegmentares das artérias pulmonares de configuração habitual, com evidencias de falhas de enchimento ao protocolo.\n\nTraqueia, brônquios principais e lobares pérvios.\nParênquima pulmonar com transparência preservada.\nNão há sinais de derrame pleural ou efusão pericárdica.\nNão se identificam linfonodomegalias mediastinais.\nCoração e aorta com dimensões preservadas.\nEstruturas ósseas do arcabouço torácico de configuração anatômica.\nEspondilopatia degenerativa dorsal.\n\nOPINIÃO:\nAngiotomografia positiva para tromboembolismo pulmonar.\n"
            },
            {
                nome: "ANGIOTOMOGRAFIA",
                texto:"Angiotomografia inconclusiva / negativa",
                tags:" Angiotomo inconclusiva / negativa",
                laudo_SemContraste:"ANGIOTOMOGRAFIA COMPUTADORIZADA DO TÓRAX\n\nTÉCNICA\nOs cortes tomográficos computadorizados foram obtidos antes e durante a infusão intravenosa periférica de contraste iodado não-iônico, porém concentração do contraste não está adequada, prejudicando a avaliação do exame. Foram empregadas as técnicas multislice e de alta resolução. Protocolo para pesquisa de tromboembolismo pulmonar.\n\nRELATÓRIO\nTronco da artéria pulmonar, artérias pulmonares direita e esquerda com calibre e contrastação normais.\nRamos segmentares e subsegmentares das artérias pulmonares de configuração habitual, sem evidencias de falhas de enchimento ou obstrução detectáveis ao protocolo.\nTraqueia, brônquios principais e lobares pérvios.\nParênquima pulmonar com transparência preservada.\nNão há sinais de derrame pleural ou efusão pericárdica.\nNão se identificam linfonodomegalias mediastinais.\nCoração e aorta com dimensões preservadas.\nEstruturas ósseas do arcabouço torácico de configuração anatômica.\nEspondilopatia degenerativa dorsal.\n\nOPINIÃO:\nAngiotomografia inconclusiva para tromboembolismo pulmonar.\n",
                laudo_ComContraste:"ANGIOTOMOGRAFIA COMPUTADORIZADA DO TÓRAX\n\nTÉCNICA\nOs cortes tomográficos computadorizados foram obtidos antes e durante a infusão intravenosa periférica de contraste iodado não-iônico. Foram empregadas as técnicas multislice e de alta resolução. Protocolo para pesquisa de tromboembolismo pulmonar.\n\nRELATÓRIO\nTronco da artéria pulmonar, artérias pulmonares direita e esquerda com calibre e contrastação normais.\nRamos segmentares e subsegmentares das artérias pulmonares de configuração habitual, sem evidencias de falhas de enchimento ou obstrução detectáveis ao protocolo.\nTraqueia, brônquios principais e lobares pérvios.\nParênquima pulmonar com transparência preservada.\nNão há sinais de derrame pleural ou efusão pericárdica.\nNão se identificam linfonodomegalias mediastinais.\nCoração e aorta com dimensões preservadas.\nEstruturas ósseas do arcabouço torácico de configuração anatômica.\nEspondilopatia degenerativa dorsal.\n\nOPINIÃO:\nAngiotomografia negativa para tromboembolismo pulmonar.\n"
            },
        ]            
       
        
        
    },
    ressonancia:{

        abdomen: [

            {
                nome: "Abdomen Total",
                texto:"Exame normal + Pelve Feminina",
                tags:"VB+ / Pelve Feminina",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar com boa distensão, de paredes finas e conteúdo de sinal homogêneo. Ausência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nÚtero em anteversoflexão, centralizado, com dimensões, contornos e sinal miometrial habituais. Mede _____ x _____ x _____ cm, volume estimado em ______ cm³.\nZona juncional com intensidade de sinal e espessura mantidas.\nEndométrio centrado e homogêneo, com espessura de mm.\nEspaço retrocervical e do septo retovaginal livres.\nOvários tópicos, com dimensões, contornos e sinal normais. Não se caracterizam cistos hemorrágicos.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar com boa distensão, de paredes finas e conteúdo de sinal homogêneo. Ausência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nÚtero em anteversoflexão, centralizado, com dimensões, contornos e sinal miometrial habituais. Mede _____ x _____ x _____ cm, volume estimado em ______ cm³.\nZona juncional com intensidade de sinal e espessura mantidas.\nEndométrio centrado e homogêneo, com espessura de mm.\nEspaço retrocervical e do septo retovaginal livres.\nOvários tópicos, com dimensões, contornos e sinal normais. Não se caracterizam cistos hemorrágicos.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Total",
                texto:"Exame normal + Pelve Masculina",
                tags:"VB+ / Pelve Masculina",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar com boa distensão, de paredes finas e conteúdo de sinal homogêneo. Ausência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nPróstata com morfologia usual, de contornos regulares, medindo _____ x _____ x _____ cm, peso estimado em ______ g.\nZonas de periférica com sinal homogêneo, sem definição de lesões focais.\nZonas de transição com sinal homogêneo, sem definição de lesões focais.\nVesículas seminais simétricas, com contornos, dimensões e intensidade de sinal conservados.\nAusência de linfonodomegalias ou de liquido livre na cavidade.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nVesícula biliar com boa distensão, de paredes finas e conteúdo de sinal homogêneo. Ausência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nPróstata com morfologia usual, de contornos regulares, medindo _____ x _____ x _____ cm, peso estimado em ______ g.\nZonas de periférica com sinal homogêneo, sem definição de lesões focais.\nZonas de transição com sinal homogêneo, sem definição de lesões focais.\nVesículas seminais simétricas, com contornos, dimensões e intensidade de sinal conservados.\nAusência de linfonodomegalias ou de liquido livre na cavidade.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Total",
                texto:"Exame normal + Pelve Feminina",
                tags:"VB- / Pelve Feminina",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nAusência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nÚtero em anteversoflexão, centralizado, com dimensões, contornos e sinal miometrial habituais. Mede _____ x _____ x _____ cm, volume estimado em ______ cm³.\nZona juncional com intensidade de sinal e espessura mantidas.\nEndométrio centrado e homogêneo, com espessura de mm.\nEspaço retrocervical e do septo retovaginal livres.\nOvários tópicos, com dimensões, contornos e sinal normais. Não se caracterizam cistos hemorrágicos.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nAusência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nÚtero em anteversoflexão, centralizado, com dimensões, contornos e sinal miometrial habituais. Mede _____ x _____ x _____ cm, volume estimado em ______ cm³.\nZona juncional com intensidade de sinal e espessura mantidas.\nEndométrio centrado e homogêneo, com espessura de mm.\nEspaço retrocervical e do septo retovaginal livres.\nOvários tópicos, com dimensões, contornos e sinal normais. Não se caracterizam cistos hemorrágicos.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Total",
                texto:"Exame normal + Pelve Masculina",
                tags:"VB- / Pelve Masculina",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nAusência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nPróstata com morfologia usual, de contornos regulares, medindo _____ x _____ x _____ cm,, peso estimado em ______ g.\nZonas de periférica com sinal homogêneo, sem definição de lesões focais.\nZonas de transição com sinal homogêneo, sem definição de lesões focais.\nVesículas seminais simétricas, com contornos, dimensões e intensidade de sinal conservados.\nAusência de linfonodomegalias ou de liquido livre na cavidade.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ABDOME TOTAL\n\nTÉCNICA:\nRealizadas sequências multiplanares ponderadas em T1 e T2.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nAusência de falhas de enchimento sugestivas de cálculos.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAlças intestinais de distribuição usual, sem sinais aparentes de anormalidades focais.\nAorta e veia cava inferior com calibre e contornos normais.\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo.\nPróstata com morfologia usual, de contornos regulares, medindo _____ x _____ x _____ cm, peso estimado em ______ g.\nZonas de periférica com sinal homogêneo, sem definição de lesões focais.\nZonas de transição com sinal homogêneo, sem definição de lesões focais.\nVesículas seminais simétricas, com contornos, dimensões e intensidade de sinal conservados.\nAusência de linfonodomegalias ou de liquido livre na cavidade.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Superior",
                texto:"Exame normal",
                tags:"VB+",
                laudo_SemContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 sem a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Existe concentração e excreção adequada do agente de contraste paramagnético. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Superior",
                texto:"Exame normal",
                tags:"VB-",
                laudo_SemContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 sem a injeção intravenosa do meio de contraste paramagnético.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nAusência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nAusência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Existe concentração e excreção adequada do agente de contraste paramagnético. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Abdomen Superior",
                texto:"Dosagem Ferro Hepático",
                tags:"Dosagem Ferro Hepático",
                laudo_SemContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR COM QUANTIFICAÇÃO DE FERRO HEPÁTICO \n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nFerro hepático estimado em ___ µmol/g (normal até 36,0 µmol/g).\nVeias hepáticas e ramos portais preservados.\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.",
                laudo_ComContraste:"RESSONANCIA MAGNETICA DO ABDOME SUPERIOR COM QUANTIFICAÇÃO DE FERRO HEPÁTICO\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nEstruturas ósseas íntegras. Planos miotendíneos regionais conservados.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nFerro hepático estimado em ___ µmol/g (normal até 36,0 µmol/g).\nVeias hepáticas e ramos portais preservados.\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nNão há dilatação das vias biliares intra ou extra-hepáticas.\nPâncreas de dimensões normais e intensidade de sinal preservada. Não há dilatação do ducto pancreático principal.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Existe concentração e excreção adequada do agente de contraste paramagnético. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções no abdome superior.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade."
            },
            {
                nome: "URORRESSONÂNCIA",
                texto:"URORRESSONÂNCIA",
                tags:"URORRESSONÂNCIA",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"RESSONANCIA MAGNETICA DE RINS E VIAS URINÁRIAS( URORRESSONÂNCIA ) \n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nRim direito tópico, de dimensões normais, contornos regulares e intensidade de sinal habitual.\nRim esquerdo tópico, de dimensões normais, contornos regulares e intensidade de sinal habitual.\nAmbos os rins apresentam concentração e eliminação adequada do agente de contraste paramagnético.\nAusência de hidronefrose.\nUreteres com trajeto e calibre preservados.\nBexiga com morfologia habitual, de paredes finas e conteúdo homogêneo.\nNão foram visualizadas linfonodomegalias nos segmentos avaliados.\nAusência de líquido livre ou coleções na cavidade peritoneal.\nA avaliação sucinta das demais estruturas não revelou anormalidades significativas para o protocolo proposto.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade."
            },
            {
                nome: "COLANGIO RESSONÂNCIA ",
                texto:"COLANGIORRESSONÂNCIA + Abdomen Superior",
                tags:"ColangioRM + Abd Superior",
                laudo_SemContraste:"COLANGIORRESSONÂNCIA MAGNÉTICA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1 e T2, bem como sequências fortemente ponderadas em T2 para o estudo das vias biliares. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nRESULTADO:\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nDucto cístico com implantação adequada na margem posterior do colédoco proximal.\nNão há dilatação das vias biliares intrahepáticas.\nColédoco de calibre normal, sem cálculos de volume apreciável.\nDucto pancreático principal de calibre e contornos preservados.\nConfluência dos ductos colédoco e pancreático principal na papila maior do duodeno.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nPâncreas de dimensões normais e intensidade de sinal preservada.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados.Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nAusência de líquido livre, coleções ou linfonodomegalias no abdome superior.\n\nCONCLUSÃO:\nColangiorressonância magnética normal.\n",
                laudo_ComContraste:"COLANGIORRESSONÂNCIA MAGNÉTICA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1 e T2, bem como sequências fortemente ponderadas em T2 para o estudo das vias biliares. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.\n\nRESULTADO:\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nDucto cístico com implantação adequada na margem posterior do colédoco proximal.\nNão há dilatação das vias biliares intrahepáticas.\nColédoco de calibre normal, sem cálculos de volume apreciável.\nDucto pancreático principal de calibre e contornos preservados.\nConfluência dos ductos colédoco e pancreático principal na papila maior do duodeno.\nFígado de dimensões normais, contornos regulares e bordos finos. Parênquima com intensidade de sinal habitual. Ausência de lesões focais detectáveis.\nVeias hepáticas e ramos portais preservados.\nPâncreas de dimensões normais e intensidade de sinal preservada.\nBaço de dimensões normais, contornos regulares e intensidade de sinal preservada.\nRins tópicos, com contornos, dimensões e espessura do parênquima conservados. Existe concentração adequada do meio de contraste paramagnético. Não há sinais de dilatação pielocalicinal.\nAdrenais de morfologia, dimensões e sinal usuais.\nAorta e veia cava inferior com trajeto habitual, calibre preservado e paredes regulares.\nAusência de líquido livre, coleções ou linfonodomegalias no abdome superior.\n\nCONCLUSÃO:\nColangiorressonância magnética normal.\n"
            },
            {
                nome: "COLANGIO RESSONÂNCIA ",
                texto:"COLANGIORRESSONÂNCIA somente",
                tags:"ColangioRM somente",
                laudo_SemContraste:"COLANGIORRESSONÂNCIA MAGNÉTICA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1 e T2, bem como sequências fortemente ponderadas em T2 para o estudo das vias biliares. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nRESULTADO:\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nDucto cístico com implantação adequada na margem posterior do colédoco proximal.\nNão há dilatação das vias biliares intrahepáticas.\nColédoco de calibre normal, sem cálculos de volume apreciável.\nDucto pancreático principal de calibre e contornos preservados.\nConfluência dos ductos colédoco e pancreático principal na papila maior do duodeno\n\nCONCLUSÃO:\nColangiorressonância magnética normal.\n",
                laudo_ComContraste:"COLANGIORRESSONÂNCIA MAGNÉTICA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1 e T2, bem como sequências fortemente ponderadas em T2 para o estudo das vias biliares. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.\n\nRESULTADO:\nVesícula biliar com boa distensão, de paredes finas e regulares. Ausência de falhas de enchimento sugestivas de cálculos.\nDucto cístico com implantação adequada na margem posterior do colédoco proximal.\nNão há dilatação das vias biliares intrahepáticas.\nColédoco de calibre normal, sem cálculos de volume apreciável.\nDucto pancreático principal de calibre e contornos preservados.\nConfluência dos ductos colédoco e pancreático principal na papila maior do duodeno.\n\nCONCLUSÃO:\nColangiorressonância magnética normal.\n"
            },
            {
                nome: "PELVE FEMININA ",
                texto:"PELVE FEMININA",
                tags:"Pelve feminina sem medida",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE FEMININA\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nANÁLISE:\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo. Meatos ureterais livres.\nCanal vaginal de paredes regulares na ausência de distensão endoluminal por gel.\nColo uterino e canal cervical preservados.\nÚtero em anteversoflexão, centralizado, com dimensões preservadas e contornos regulares.\nMiométrio com intensidade de sinal habitual, sem definição de nódulos.\nZona juncional regular, com espessura e intensidade de sinal habitual.\nEndométrio homogêneo e centrado.\nLigamentos uterossacros e redondos íntegros. Espaços vesicuterino, retrocervical e do septo retovaginal livres.\nOvário direito tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual.\nOvário esquerdo tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre patológico na cavidade.\nNão há evidência de linfonodomegalias pélvicas.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE FEMININA\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências T1 após a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo. Meatos ureterais livres.\nCanal vaginal de paredes regulares na ausência de distensão endoluminal por gel.\nColo uterino e canal cervical preservados.\nÚtero em anteversoflexão, centralizado, com dimensões preservadas e contornos regulares.\nMiométrio com intensidade de sinal habitual, sem definição de nódulos.\nZona juncional regular, com espessura e intensidade de sinal habitual.\nEndométrio homogêneo e centrado.\nLigamentos uterossacros e redondos íntegros. Espaços vesicuterino, retrocervical e do septo retovaginal livres.\nOvário direito tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual.\nOvário esquerdo tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre patológico na cavidade.\nNão há evidência de linfonodomegalias pélvicas.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos limites da normalidade.\n"
            },
            {
                nome: "PELVE FEMININA ",
                texto:"PELVE FEMININA",
                tags:"Pelve feminina com medida",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE FEMININA\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Ausência de administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo. Meatos ureterais livres.\nCanal vaginal com boa distensão luminal pelo gel, de paredes finas e lisas.\nColo uterino e canal cervical preservados.\nÚtero em anteversoflexão, centralizado, com dimensões preservadas e contornos regulares. Mede ___ x ___ x ___ cm, com volume estimado em ___ cm³.\nMiométrio com intensidade de sinal habitual, sem definição de nódulos.\nZona juncional regular, com espessura mantida (parede corporal posterior: mm) e intensidade de sinal habitual.\nEndométrio homogêneo e centrado, com espessura de ____ mm.\nLigamentos uterossacros e redondos íntegros. Espaços vesicuterino, retrocervical e do septo retovaginal livres.\nOvário direito tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual. O ovário mede ___ x ___ x ___ cm, com volume de ___ cm³.\nOvário esquerdo tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual. O ovário mede ___ x ___ x ___ cm, com volume de ___ cm³.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre patológico na cavidade.\nNão há evidência de linfonodomegalias pélvicas.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE FEMININA\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências T1 após a injeção intravenosa do meio de contraste paramagnético. Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga com boa repleção, paredes finas e conteúdo de sinal homogêneo. Meatos ureterais livres.\nCanal vaginal com boa distensão luminal pelo gel, de paredes finas e lisas.\nColo uterino e canal cervical preservados.\nÚtero em anteversoflexão, centralizado, com dimensões preservadas e contornos regulares. Mede ___ x ___ x ___ cm, com volume estimado em ___ cm³.\nMiométrio com intensidade de sinal habitual, sem definição de nódulos.\nZona juncional regular, com espessura mantida (parede corporal posterior: mm) e intensidade de sinal habitual.\nEndométrio homogêneo e centrado, com espessura de ____ mm.\nLigamentos uterossacros e redondos íntegros. Espaços vesicuterino, retrocervical e do septo retovaginal livres.\nOvário direito tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual. O ovário mede ___ x ___ x ___ cm, com volume de ___ cm³.\nOvário esquerdo tópico, com dimensões normais, contornos regulares e intensidade de sinal habitual. O ovário mede ___ x ___ x ___ cm, com volume de ___ cm³.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre patológico na cavidade.\nNão há evidência de linfonodomegalias pélvicas.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos limites da normalidade.\n"
            },          
            {
                nome: "Pelve Masculina ",
                texto:"Prostata Sem medida",
                tags:"Prostata Sem medida",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes regulares e conteúdo homogêneo. Meatos ureterais livres.\nPróstata com morfologia usual, de contornos regulares e lisos. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes regulares e conteúdo homogêneo. Meatos ureterais livres.\nPróstata com morfologia usual, de contornos regulares e lisos. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Pelve Masculina",
                texto:"Prostata com medida",
                tags:"Prostata com medida",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes regulares e conteúdo homogêneo. Meatos ureterais livres.\nPróstata com morfologia usual, de contornos regulares e lisos. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nA próstata mede ___ x ___ x ___ cm, com volume estimado em ___ cm³ (VR< 30 cm³).\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes regulares e conteúdo homogêneo. Meatos ureterais livres.\nPróstata com morfologia usual, de contornos regulares e lisos. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nA próstata mede ___ x ___ x ___ cm, com volume estimado em ___ cm³ (VR< 30 cm³).\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nExame de ressonância magnética dentro dos padrões da normalidade.\n"
            },
            {
                nome: "Pelve Masculina",
                texto:"Prostata Aumentada",
                tags:"Prostata Aumentada",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Ausência de injeção intravenosa do meio de contraste paramagnético.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes espessdas mas de conteúdo homogêneo. Meatos ureterais livres.\nPróstata com dimenões aumentdas ede contornos contornos lobulados. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nA próstata mede ___ x ___ x ___ cm, com volume estimado em ___ cm³ (VR< 30 cm³).\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nBexiga de esforço\nHipertrofia da prostática.",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA PELVE MASCULINA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nBexiga em repleção parcial, com paredes espessdas mas de conteúdo homogêneo. Meatos ureterais livres.\nPróstata com dimenões aumentdas ede contornos contornos lobulados. Zonas de transição e periférica com intensidade de sinal habitual, sem evidências de lesões focais suspeitas. Ausência de focos suspeitos de restrição à livre movimentação das moléculas de água ou impregnação precoce anômala pelo agente de contraste paramagnético.\nCápsula prostática íntegra. Planos gordurosos periprostáticos conservados.\nA próstata mede ___ x ___ x ___ cm, com volume estimado em ___ cm³ (VR< 30 cm³).\nVesículas seminais simétricas, com dimensões e intensidade de sinal habituais.\nCanal anal e reto de configuração anatômica.\nAusência de líquido livre na cavidade pélvica.\nNão foram evidenciadas linfonodomegalias nos segmentos avaliados.\n\nOPINIÃO:\nBexiga de esforço\nHipertrofia prostática."
            },
            {
                nome: "Pelve Masculina",
                texto:"Prostata Multiparamétrica",
                tags:"Prostata Multiparamétrica",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA MULTIPARAMÉTRICA DA PRÓSTATA\n\nTÉCNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão. Realizadas sequências dinâmicas T1 após a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nINDICAÇÃO CLÍNICA:\nDetecção de neoplasia prostática clinicamente significante].\n[Elevação do PSA]\n[Estadiamento de neoplasia da próstata]\n[Pesquisa de recidiva local pós-prostatectomia].\n\nRESULTADO:\nDimensões da próstata: x  x  cm. Peso estimado em ___ gramas.\nZona de transição:  heterogênea a custa de nódulos de provável hiperplasia. Não há lesões suspeitas para neoplasia significante na glândula central.\nLesão #1: [morfologia] [sinal em T2] [sinal no DWI/ADC] [padrão de realce] [localização] [tamanho]. (score___)*.\nZona periférica: Não há lesões expansivas com significativa restrição à difusão ou perfusão anômala.\nLesão #1: [morfologia] [sinal em T2] [sinal no DWI/ADC] [padrão de realce] [localização] [tamanho]. (score___)*.\nCápsula prostática: sem abaulamentos ou irregularidades. Feixes vasculonervosos livres.\nVesículas seminais: simétricas, com morfologia e sinal normais.\nLinfonodos: ausência de linfonodomegalias.\nPelve óssea: ausência de lesões ósseas com características suspeitas para lesão secundária.\nBexiga: [paredes finas e conteúdo líquido homogêneo.] [paredes trabeculadas e conteúdo homogêneo.] [pequena repleção, limitando a avaliação parietal].\nAchados adicionais:\n\nCONCLUSÃO:\nMuito baixa probabilidade de neoplasia prostática clinicamente significante (score 1/5)*.\nBaixa probabilidade de neoplasia prostática clinicamente significante (score 2/5)*.\nAchados indeterminados para neoplasia prostática clinicamente significante (score 3/5)*.\nModerada probabilidade de neoplasia prostática clinicamente significante (score 4/5)*.\nAlta probabilidade de neoplasia prostática clinicamente significante (score 5/5)*.\n"
            },
            {
                nome: "PELVE Estadiamento de câncer de reto",
                texto:"Estadiamento de câncer de reto",
                tags:"Estadiamento de câncer de reto",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DE PELVE (Estadiamento de câncer de reto)\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 sem a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFormação expansiva (anular / semi-anular / ulcerada / polipoide / não visualizada), (sem/com) conteúdo mucinoso, distando ____ cm da borda anal e cuja margem distal encontra-se ____ cm (acima / no plano / abaixo) do anel anorretal.\nEstende-se por ___ cm e encontra-se (acima da / abaixo da / no plano da) reflexão peritoneal.\nA borda infiltrativa do tumor localiza-se de ___ h até___ h.\nPorcentagem de envolvimento circunferencial = ___ % da circunferênciaA lesão (é restrita à / estende-se além da) camada muscular própria (, destacando-se extensão extramural de ___ mm.)Estadio T (RM): T1 / T2 / T3a (<1 mm) / T3b (de 1-5 mm) / T3c (de 5-15 mm) / T3d (>15 mm) / T4 visceral / T4 peritonealPara tumores de reto baixo no plano ou abaixo do anel anorretal:\nExtensão para a camada submucosa ou parte da espessura da muscular própria: plano interesfincteriano /mesorretal seguro, fáscia mesorretal livre.\nExtensão da espessura total da muscular própria: plano interesfincteriano /mesorretal em risco.\nExtensão ao plano interesfincteriano: plano interesfincteriano /mesorretal em risco. Extensão ao esfíncter externo: plano interesfincteriano /mesorretal em risco.\nExtensão além do esfíncter externo, no tecido isquiorretal: plano interesfincteriano /mesorretal em risco).\nLinfonodos (presentes / ausentes), de aspecto benigno reacional/ com sinal heterogêneo/bordas irregulares, compatíveis com acometimento neoplásico, em número de ___.\n(Não há / Há evidência de) invasão venosa extramural de vasos de (pequeno / médio / grande) calibre.\nA menor margem de ressecção circunferencial é por (disseminação direta do tumor/ invasão vascular extramural / depósito de tumor), localizada às __ h.\nA distância mínima do tumor à fáscia mesorretal é de ___ mm, e a margem de ressecção circunferencial está (livre / envolvida).\n(Não há / Há) evidência de implantes peritoneais.\n(Não se observam / Destacam-se) linfonodos laterais pélvicos (benignos / malignos, com sinal heterogêneo / bordas irregulares) nas cadeias (obturatória direita/ esquerda, ilíaca externa direita/ esquerda hipogástricas inferiores direita/ esquerda).\nAchados adicionais:\nSinais de Invasão da Musculatura Esfincteriana\nNão\nInvasão do esfincter interno\nInvasão do esfincter externo\nEstadio T\nIndetectável (Tx0)\nInvade submucosa (T1)\nInvade muscular própria (T2)\nInvade ___ mm além da muscular própria (T3)\n(a) <1 mm; (b) 1-5 mm; (c) 5-15 mm; (d) >15 mm\nInvasão de órgãos adjacentes (a) ou reflexão peritoneal (b) (T4)Envolvimento Circunferencial da Fáscia Mesorretal\nDistância mínima do tumor para a fáscia = ___ mm (folhetos anterior, lateral direito, lateral esquerdo ou posterior)Distância mínima de linfonodos suspeitos para a fáscia = ___ mm> 1 mm – provavelmente sem invasão; ≤ 1 mm – provavelmente com invasãoInvasão vascular\nNão\nAumento de calibre com sinal de tumor em pequenos vasos\nAumento de calibre com sinal de tumor em grandes vasos\nEstadio N\nNúmero de linfonodos suspeitos = ____\nRestrição a difusão? Sim ou Não\nSem Linfonodos ou linfonodos com sinal homogêneo e bordas lisas (N0)Entre 1 e 3 linfonodos com sinal heterogêneo ou bordas irregulares (N1)Mais que 4 linfonodos com sinal heterogêneo ou bordas irregulares (N2)Linfonodos Ilíacos Externos, Internos ou Obturatórios\nNão\nSinal homogêneo e bordas lisas\nSinal heterogêneo ou bordas irregulares.\n\nCONCLUSÃO\nEstadiamento pela RM: T __ N __ M __ , fáscia mesorretal (livre / comprometida), invasão vascular extramural (positiva / negativa).\n</p>",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DE PELVE (Estadiamento de câncer de reto)\n\nTECNICA:\nRealizadas sequencias multiplanares ponderadas em T1, T2 e em difusão com administração de gel vaginal. Realizadas sequências T1 após a injeção intravenosa do meio de contraste paramagnético.\nExame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE:\nFormação expansiva (anular / semi-anular / ulcerada / polipoide / não visualizada), (sem/com) conteúdo mucinoso, distando ____ cm da borda anal e cuja margem distal encontra-se ____ cm (acima / no plano / abaixo) do anel anorretal.\nEstende-se por ___ cm e encontra-se (acima da / abaixo da / no plano da) reflexão peritoneal.\nA borda infiltrativa do tumor localiza-se de ___ h até___ h.\nPorcentagem de envolvimento circunferencial = ___ % da circunferênciaA lesão (é restrita à / estende-se além da) camada muscular própria (, destacando-se extensão extramural de ___ mm.)Estadio T (RM): T1 / T2 / T3a (<1 mm) / T3b (de 1-5 mm) / T3c (de 5-15 mm) / T3d (>15 mm) / T4 visceral / T4 peritonealPara tumores de reto baixo no plano ou abaixo do anel anorretal:\nExtensão para a camada submucosa ou parte da espessura da muscular própria: plano interesfincteriano /mesorretal seguro, fáscia mesorretal livre.\nExtensão da espessura total da muscular própria: plano interesfincteriano /mesorretal em risco.\nExtensão ao plano interesfincteriano: plano interesfincteriano /mesorretal em risco. Extensão ao esfíncter externo: plano interesfincteriano /mesorretal em risco.\nExtensão além do esfíncter externo, no tecido isquiorretal: plano interesfincteriano /mesorretal em risco).\nLinfonodos (presentes / ausentes), de aspecto benigno reacional/ com sinal heterogêneo/bordas irregulares, compatíveis com acometimento neoplásico, em número de ___.\n(Não há / Há evidência de) invasão venosa extramural de vasos de (pequeno / médio / grande) calibre.\nA menor margem de ressecção circunferencial é por (disseminação direta do tumor/ invasão vascular extramural / depósito de tumor), localizada às __ h.\nA distância mínima do tumor à fáscia mesorretal é de ___ mm, e a margem de ressecção circunferencial está (livre / envolvida).\n(Não há / Há) evidência de implantes peritoneais.\n(Não se observam / Destacam-se) linfonodos laterais pélvicos (benignos / malignos, com sinal heterogêneo / bordas irregulares) nas cadeias (obturatória direita/ esquerda, ilíaca externa direita/ esquerda hipogástricas inferiores direita/ esquerda).\nAchados adicionais:\nSinais de Invasão da Musculatura Esfincteriana\nNão\nInvasão do esfincter interno\nInvasão do esfincter externo\nEstadio T\nIndetectável (Tx0)\nInvade submucosa (T1)\nInvade muscular própria (T2)\nInvade ___ mm além da muscular própria (T3)\n(a) <1 mm; (b) 1-5 mm; (c) 5-15 mm; (d) >15 mm\nInvasão de órgãos adjacentes (a) ou reflexão peritoneal (b) (T4)Envolvimento Circunferencial da Fáscia Mesorretal\nDistância mínima do tumor para a fáscia = ___ mm (folhetos anterior, lateral direito, lateral esquerdo ou posterior)Distância mínima de linfonodos suspeitos para a fáscia = ___ mm> 1 mm – provavelmente sem invasão; ≤ 1 mm – provavelmente com invasãoInvasão vascular\nNão\nAumento de calibre com sinal de tumor em pequenos vasos\nAumento de calibre com sinal de tumor em grandes vasos\nEstadio N\nNúmero de linfonodos suspeitos = ____\nRestrição a difusão? Sim ou Não\nSem Linfonodos ou linfonodos com sinal homogêneo e bordas lisas (N0)Entre 1 e 3 linfonodos com sinal heterogêneo ou bordas irregulares (N1)Mais que 4 linfonodos com sinal heterogêneo ou bordas irregulares (N2)Linfonodos Ilíacos Externos, Internos ou Obturatórios\nNão\nSinal homogêneo e bordas lisas\nSinal heterogêneo ou bordas irregulares.\n\nCONCLUSÃO\nEstadiamento pela RM: T __ N __ M __ , fáscia mesorretal (livre / comprometida), invasão vascular extramural (positiva / negativa).\n</p>"
            },
        
        ],
        musculoesqueletico:[
            {
                nome: "OMBRO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO OMBRO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nArticulação acromioclavicular com aspecto habitual.\nAcrômio <>, sem inclinação significativa.\nEstruturas musculotendíneas que compõem o manguito rotador com morfologia preservada.\nVentres musculares tróficos.\nTendão da cabeça longa do bíceps com morfologia habitual, normoposicionado no sulco intertubercular.\nLábio da glenoide com morfologia e intensidade de sinal dentro da normalidade.\nNão há derrame articular ou erosões condrais profundas no compartimento glenoumeral.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n", 
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO OMBRO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2. Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE\nArticulação acromioclavicular com aspecto habitual.\nAcrômio <>, sem inclinação significativa.\nEstruturas musculotendíneas que compõem o manguito rotador com morfologia preservada.\nVentres musculares tróficos.\nTendão da cabeça longa do bíceps com morfologia habitual, normoposicionado no sulco intertubercular.\nLábio da glenoide com morfologia e intensidade de sinal dentro da normalidade.\nNão há derrame articular ou erosões condrais profundas no compartimento glenoumeral.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "OMBRO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO OMBRO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nArticulação acromioclavicular com aspecto habitual.\nAcrômio <>, sem inclinação significativa.\nEstruturas musculotendíneas que compõem o manguito rotador com morfologia preservada.\nVentres musculares tróficos.\nTendão da cabeça longa do bíceps com morfologia habitual, normoposicionado no sulco intertubercular.\nLábio da glenoide com morfologia e intensidade de sinal dentro da normalidade.\nNão há derrame articular ou erosões condrais profundas no compartimento glenoumeral.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n", 
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO OMBRO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2. Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE\nArticulação acromioclavicular com aspecto habitual.\nAcrômio <>, sem inclinação significativa.\nEstruturas musculotendíneas que compõem o manguito rotador com morfologia preservada.\nVentres musculares tróficos.\nTendão da cabeça longa do bíceps com morfologia habitual, normoposicionado no sulco intertubercular.\nLábio da glenoide com morfologia e intensidade de sinal dentro da normalidade.\nNão há derrame articular ou erosões condrais profundas no compartimento glenoumeral.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "COTOVELO DIREITO ",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO COTOVELO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nRELATÓRIO\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nLigamentos colaterais íntegros, com espessura e intensidade de sinal normais.\nNão há evidências de erosões condrais profundas ou derrame articular significativo.\nFeixes neurovasculares sem alterações pelo método.\nTúnel cubital sem anormalidades.\n\nOPINIÃO\nExame dentro dos limites da normalidade. ",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO COTOVELO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nRELATÓRIO\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nLigamentos colaterais íntegros, com espessura e intensidade de sinal normais.\nNão há evidências de erosões condrais profundas ou derrame articular significativo.\nFeixes neurovasculares sem alterações pelo método.\nTúnel cubital sem anormalidades.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
            },
            {
            nome: "COTOVELO ESQUERDO",
            texto:"Normal",
            tags:"Normal",
            laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO COTOVELO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nRELATÓRIO\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nLigamentos colaterais íntegros, com espessura e intensidade de sinal normais.\nNão há evidências de erosões condrais profundas ou derrame articular significativo.\nFeixes neurovasculares sem alterações pelo método.\nTúnel cubital sem anormalidades.\n\nOPINIÃO\nExame dentro dos limites da normalidade.",
            laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO COTOVELO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nRELATÓRIO\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nLigamentos colaterais íntegros, com espessura e intensidade de sinal normais.\nNão há evidências de erosões condrais profundas ou derrame articular significativo.\nFeixes neurovasculares sem alterações pelo método.\nTúnel cubital sem anormalidades.\n\nOPINIÃO\nExame dentro dos limites da normalidade."
        
        
            },
            {
                nome: "PUNHO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO PUNHO DIREITO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1, T2.\n\nANÁLISE\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nTendões flexores e extensores com morfologia preservada.\nLigamentos intrínsecos e extrínsecos do punho de aspecto anatômico.\nComplexo fibrocartilagem triangular com morfologia e intensidade de sinal dentro da normalidade.\nNervo mediano e ulnar com calibre e intensidade de sinal habituais.\nNão há derrame articular significativo.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO PUNHO DIREITO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1, T2.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nTendões flexores e extensores com morfologia preservada.\nLigamentos intrínsecos e extrínsecos do punho de aspecto anatômico.\nComplexo fibrocartilagem triangular com morfologia e intensidade de sinal dentro da normalidade.\nNervo mediano e ulnar com calibre e intensidade de sinal habituais.\nNão há derrame articular significativo.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "PUNHO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO PUNHO ESQUERDO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1, T2.\n\nANÁLISE\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nTendões flexores e extensores com morfologia preservada.\nLigamentos intrínsecos e extrínsecos do punho de aspecto anatômico.\nComplexo fibrocartilagem triangular com morfologia e intensidade de sinal dentro da normalidade.\nNervo mediano e ulnar com calibre e intensidade de sinal habituais.\nNão há derrame articular significativo.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO PUNHO ESQUERDO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1, T2.Exame realizado em equipamento de ressonância magnética com sequências, ponderações e planos específicos para o segmento de interesse, antes e após a administração endovenosa do meio de contraste.\n\nANÁLISE\nEstruturas ósseas de morfologia e intensidade do sinal normais.\nTendões flexores e extensores com morfologia preservada.\nLigamentos intrínsecos e extrínsecos do punho de aspecto anatômico.\nComplexo fibrocartilagem triangular com morfologia e intensidade de sinal dentro da normalidade.\nNervo mediano e ulnar com calibre e intensidade de sinal habituais.\nNão há derrame articular significativo.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
                      
            },
            {
                nome: "MÃO DIREITA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA MÃO DIREITA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares mantidos.\nEstruturas ligamentares íntegras.\nTendões flexores e extensores com aspecto preservado.\nPlacas volares com morfologia habitual.\nNão há sinais de derrame articular ou de erosões ósseas subcondrais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA MÃO DIREITA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada a administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares mantidos.\nEstruturas ligamentares íntegras.\nTendões flexores e extensores com aspecto preservado.\nPlacas volares com morfologia habitual.\nNão há sinais de derrame articular ou de erosões ósseas subcondrais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "MÃO ESQUERDA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA MÃO ESQUERDA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\nFoi realizada a administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares mantidos.\nEstruturas ligamentares íntegras.\nTendões flexores e extensores com aspecto preservado.\nPlacas volares com morfologia habitual.\nNão há sinais de derrame articular ou de erosões ósseas subcondrais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA MÃO ESQUERDA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares mantidos.\nEstruturas ligamentares íntegras.\nTendões flexores e extensores com aspecto preservado.\nPlacas volares com morfologia habitual.\nNão há sinais de derrame articular ou de erosões ósseas subcondrais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
                        
            },
            {
                nome: "QUADRIL DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO QUADRIL DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e intensidade de sinal habituais.\nConcavidade da transição cabeça / colo femoral preservada.\nLábio acetabular com morfologia e intensidade de sinal normais, sem evidência de desinserção.\nNão há derrame articular ou erosões condrais profundas no quadril.\nLigamentos redondo e iliofemoral íntegros.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO QUADRIL DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e intensidade de sinal habituais.\nConcavidade da transição cabeça / colo femoral preservada.\nLábio acetabular com morfologia e intensidade de sinal normais, sem evidência de desinserção.\nNão há derrame articular ou erosões condrais profundas no quadril.\nLigamentos redondo e iliofemoral íntegros.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "QUADRIL ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO QUADRIL ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e intensidade de sinal habituais.\nConcavidade da transição cabeça / colo femoral preservada.\nLábio acetabular com morfologia e intensidade de sinal normais, sem evidência de desinserção.\nNão há derrame articular ou erosões condrais profundas no quadril.\nLigamentos redondo e iliofemoral íntegros.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO QUADRIL ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e intensidade de sinal habituais.\nConcavidade da transição cabeça / colo femoral preservada.\nLábio acetabular com morfologia e intensidade de sinal normais, sem evidência de desinserção.\nNão há derrame articular ou erosões condrais profundas no quadril.\nLigamentos redondo e iliofemoral íntegros.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                        
            },
            {
                nome: "BACIA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA BACIA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com aspecto habitual.\nEspaços articulares mantidos.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\nNão há derrame articular nos quadris.\nArticulações sacroilíacas e sínfise púbica sem alterações significativas.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA BACIA\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com aspecto habitual.\nEspaços articulares mantidos.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\nNão há derrame articular nos quadris.\nArticulações sacroilíacas e sínfise púbica sem alterações significativas.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "SACRO ILÍACA",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DAS ARTICULAÇÕES SACRO ILÍACAS\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com aspecto habitual.\nEspaços articulares mantidos.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\nAusência de edema ósseo ou alteração de sinal em T2.\nAusência de erosões ósseas.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DAS ARTICULAÇÕES SACRO ILÍACAS\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com aspecto habitual.\nEspaços articulares mantidos.\nEstruturas musculotendíneas com morfologia dentro da normalidade.\nAusência de edema ósseo ou alteração de sinal em T2.\nAusência de erosões ósseas.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "JOELHO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO JOELHO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nMeniscos com morfologia e intensidade de sinal normais.\nLigamentos cruzados e colaterais íntegros.\nTendão do quadríceps e ligamento patelar sem alterações.\nPatela normoposicionada em relação ao índice de Caton-Deschamps, sem inclinação ou subluxação significativa na hiperextensão do joelho.\nComplexo retinacular patelar sem alterações.\nNão há evidências de derrame articular ou de erosões condrais profundas nas demais superfícies articulares avaliadas.\nFeixes neurovasculares sem alterações.\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO JOELHO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nMeniscos com morfologia e intensidade de sinal normais.\nLigamentos cruzados e colaterais íntegros.\nTendão do quadríceps e ligamento patelar sem alterações.\nPatela normoposicionada em relação ao índice de Caton-Deschamps, sem inclinação ou subluxação significativa na hiperextensão do joelho.\nComplexo retinacular patelar sem alterações.\nNão há evidências de derrame articular ou de erosões condrais profundas nas demais superfícies articulares avaliadas.\nFeixes neurovasculares sem alterações.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "JOELHO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO JOELHO ESQUERDO/p> TÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nMeniscos com morfologia e intensidade de sinal normais.\nLigamentos cruzados e colaterais íntegros.\nTendão do quadríceps e ligamento patelar sem alterações.\nPatela normoposicionada em relação ao índice de Caton-Deschamps, sem inclinação ou subluxação significativa na hiperextensão do joelho.\nComplexo retinacular patelar sem alterações.\nNão há evidências de derrame articular ou de erosões condrais profundas nas demais superfícies articulares avaliadas.\nFeixes neurovasculares sem alterações.\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO JOELHO ESQUERDO/p> TÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nMeniscos com morfologia e intensidade de sinal normais.\nLigamentos cruzados e colaterais íntegros.\nTendão do quadríceps e ligamento patelar sem alterações.\nPatela normoposicionada em relação ao índice de Caton-Deschamps, sem inclinação ou subluxação significativa na hiperextensão do joelho.\nComplexo retinacular patelar sem alterações.\nNão há evidências de derrame articular ou de erosões condrais profundas nas demais superfícies articulares avaliadas.\nFeixes neurovasculares sem alterações.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "TORNOZELO DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICO DO TORNOZELO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia habitual.\nLigamentos laterais e do complexo deltoide íntegros. Não há evidência de diástase da sindesmose tibiofibular distal.\nTendão calcâneo e aponeurose plantar de espessura e intensidade de sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nNão há derrame articular significativo ou lesões osteocondrais no dômus talar.\nFeixes neurovasculares preservados.\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICO DO TORNOZELO DIREITO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia habitual.\nLigamentos laterais e do complexo deltoide íntegros. Não há evidência de diástase da sindesmose tibiofibular distal.\nTendão calcâneo e aponeurose plantar de espessura e intensidade de sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nNão há derrame articular significativo ou lesões osteocondrais no dômus talar.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "TORNOZELO ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICO DO TORNOZELO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia habitual.\nLigamentos laterais e do complexo deltoide íntegros. Não há evidência de diástase da sindesmose tibiofibular distal.\nTendão calcâneo e aponeurose plantar de espessura e intensidade de sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nNão há derrame articular significativo ou lesões osteocondrais no dômus talar.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICO DO TORNOZELO ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia habitual.\nLigamentos laterais e do complexo deltoide íntegros. Não há evidência de diástase da sindesmose tibiofibular distal.\nTendão calcâneo e aponeurose plantar de espessura e intensidade de sinal normais.\nEstruturas musculotendíneas com morfologia preservada.\nNão há derrame articular significativo ou lesões osteocondrais no dômus talar.\nFeixes neurovasculares preservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "ANTE PÉ DIREITO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ANTEPÉ DIREITO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares preservados.\nPlacas plantares sem sinais de desinserção.\nEstruturas musculotendíneas com morfologia normal.\nFeixes neurovasculares sem alterações.\nNão há evidência de lesão expansiva no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n      ",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ANTEPÉ DIREITO \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares preservados.\nPlacas plantares sem sinais de desinserção.\nEstruturas musculotendíneas com morfologia normal.\nFeixes neurovasculares sem alterações.\nNão há evidência de lesão expansiva no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            
            
            },
            {
                nome: "ANTE PÉ ESQUERDO",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO ANTEPÉ ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares preservados.\nPlacas plantares sem sinais de desinserção.\nEstruturas musculotendíneas com morfologia normal.\nFeixes neurovasculares sem alterações.\nNão há evidência de lesão expansiva no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO ANTEPÉ ESQUERDO\n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEspaços articulares preservados.\nPlacas plantares sem sinais de desinserção.\nEstruturas musculotendíneas com morfologia normal.\nFeixes neurovasculares sem alterações.\nNão há evidência de lesão expansiva no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
                        
            },
            {
                nome: "ARTICULACAO GERAL",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA ________ \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEstruturas musculotendíneas com morfologia preservada.\nFeixes neurovasculares sem alterações.\nNáo há evidência de formações com efeito expansivo no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n", 
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA ________ \n\nTÉCNICA\nRealizados cortes multiplanares com sequências ponderadas em T1 e T2. Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANÁLISE\nEstruturas ósseas com morfologia e alinhamento dentro da normalidade.\nEstruturas musculotendíneas com morfologia preservada.\nFeixes neurovasculares sem alterações.\nNáo há evidência de formações com efeito expansivo no segmento analisado.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
                        
            },
            {
                nome: "PLEXOS BRAQUIAIS",
                texto:"Normal",
                tags:"Normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DOS PLEXOS BRAQUIAIS\n\nTÉCNICA:\nExame realizado pela técnica fast spin echo, obtendo-se sequências ponderadas em T1 e T2 em aquisições multiplanares.\n\nANALISE:\nPseudomeningocele e avulsão/má definição e irregularidades das radicelas central e dorsal.\nC5:\nC6:\nC7:\nC8:\nT1:\nTroncos superior, médio e inferior com espessura e sinal preservados.\nMúsculos supra e infraespinhal com sinal e trofismo preservados.\nCordões posteriores, lateral e medial com espessura e sinal conservados.\nMúsculos subescapular, redondo menor e latíssimo dorsal com sinal e trofismo habituais.\nMúsculos peitoral maior e menor com sinal e trofismo habituais.\nNervos axilar, radial, músculocutâneo, ulnar, mediano e ulnar de aspecto usual.\nMúsculos bíceps e coracobraquial com sinal e trofismo conservados.\nMúsculos escalenos e multifidus com sinal e trofismo conservados.\nMúsculos serrátil, trapézio, levantador da escápula e rombóide com sinal e trofismo conservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DOS PLEXOS BRAQUIAIS\n\nTÉCNICA:\nExame realizado pela técnica fast spin echo, obtendo-se sequências ponderadas em T1 e T2 em aquisições multiplanares.Foi realizada administração do meio de contraste paramagnético por via intravenosa.\n\nANALISE:\nPseudomeningocele e avulsão/má definição e irregularidades das radicelas central e dorsal.\nC5:\nC6:\nC7:\nC8:\nT1:\nTroncos superior, médio e inferior com espessura e sinal preservados.\nMúsculos supra e infraespinhal com sinal e trofismo preservados.\nCordões posteriores, lateral e medial com espessura e sinal conservados.\nMúsculos subescapular, redondo menor e latíssimo dorsal com sinal e trofismo habituais.\nMúsculos peitoral maior e menor com sinal e trofismo habituais.\nNervos axilar, radial, músculocutâneo, ulnar, mediano e ulnar de aspecto usual.\nMúsculos bíceps e coracobraquial com sinal e trofismo conservados.\nMúsculos escalenos e multifidus com sinal e trofismo conservados.\nMúsculos serrátil, trapézio, levantador da escápula e rombóide com sinal e trofismo conservados.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
                        
            },

            
        ],
        encefalo:[
            {
                nome: "Encefalo",
                texto:"Exame normal",
                tags:"Exame normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO CRÂNIO\n\nTÉCNICA\nExame realizado com sequências ecogradiente, T1, T2, FLAIR e difusão.\nPlanos de cortes múltiplos, orientados conforme os planos longitudinal e ortogonal dos lobos temporais sem a administração endovenosa do agente de contraste paramagnético.\nRealizada sequência volumétrica 3D - SPGR, com reformatações multiplanares.\n\nRELATÓRIO\nSistema ventricular de formas e dimensões dentro da normalidade.\nSulcos e fissuras encefálicas sem alterações.\nParênquima encefálico de morfologia e sinal normais.\nHipocampos, núcleos amigdaloides, colunas dos fórnices e corpos mamilares têm morfologia simétrica e sinal normal.\nTronco cerebral e cerebelo com morfologia e intensidade de sinal usuais.\nSinal de fluxo habitual das grandes artérias dos sistemas vertebrobasilar e carotídeo, pela análise das sequências convencionais.\nA sequência de difusão não demonstra áreas de restrição a movimentação livre das moléculas de água.\n\nOPINIÃO\nRessonância magnética do encéfalo dentro da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO CRÂNIO\n\nTÉCNICA\nExame realizado com sequências ecogradiente, T1, T2, FLAIR e difusão.\nPlanos de cortes múltiplos, orientados conforme os planos longitudinal e ortogonal dos lobos temporais.\nObtidas também sequências em T1 SE e FSE após a administração endovenosa do agente de contraste paramagnético.\nRealizada sequência volumétrica 3D - SPGR, com reformatações multiplanares.\n\nRELATÓRIO\nSistema ventricular de formas e dimensões dentro da normalidade.\nSulcos e fissuras encefálicas sem alterações.\nParênquima encefálico de morfologia e sinal normais.\nHipocampos, núcleos amigdaloides, colunas dos fórnices e corpos mamilares têm morfologia simétrica e sinal normal.\nTronco cerebral e cerebelo com morfologia e intensidade de sinal usuais.\nSinal de fluxo habitual das grandes artérias dos sistemas vertebrobasilar e carotídeo, pela análise das sequências convencionais.\nA sequência de difusão não demonstra áreas de restrição a movimentação livre das moléculas de água.\nA administração do agente paramagnético não evidenciou focos de impregnação anômala.\n\nOPINIÃO\nRessonância magnética do encéfalo dentro da normalidade.\n"
            },

        ],
        cervical_Face:[
            {
                nome: "Face",
                texto:"Exame normal",
                tags:"Exame normal",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DA FACE\n\nTÉCNICA\nExame de ressonância magnética da face realizado com aquisições multiplanares, pelas técnicas de spin-eco com seqüências pesadas em T1 sem a administração endovenosa de contraste paramagnético e técnica de fast spin-eco pesada em T2.\n\nRELATÓRIO\nAspecto normal das estruturas orbitárias.\nRino e orofaringe de aspecto preservado.\nGlândulas parótidas e submandibulares sem alterações.\nNão se evidenciam linfonodomegalias.\nCavidades paranasais normoaeradas.\nNão se observam realces anômalos focais.\n\nOPINIÃO:\nEstudo de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DA FACE\n\nTÉCNICA\nExame de ressonância magnética da face realizado com aquisições multiplanares, pelas técnicas de spin-eco com seqüências pesadas em T1 antes e após a administração endovenosa de contraste paramagnético e técnica de fast spin-eco pesada em T2.\n\nRELATÓRIO\nAspecto normal das estruturas orbitárias.\nRino e orofaringe de aspecto preservado.\nGlândulas parótidas e submandibulares sem alterações.\nNão se evidenciam linfonodomegalias.\nCavidades paranasais normoaeradas.\nNão se observam realces anômalos focais.\n\nOPINIÃO:\nEstudo de ressonância magnética dentro dos limites da normalidade.\n"
            },
            {
                nome: "Órbitas",
                texto:"Exame normal",
                tags:"Exame normal / orbita",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DAS ÓRBITAS\n\nTÉCNICA\nExame de ressonância magnética das órbitas realizado com aquisições multiplanares pela técnica spin-eco pesada em T1 sem a administração endovenosa de contraste paramagnético (gadolínio) e técnica turbo spin-eco pesada em T2.\n\nRELATÓRIO\nGlobos oculares de contornos regulares apresentando sinal de aspecto normal.\nNervos ópticos, gordura intra e extra-conais e musculatura extrínseca ocular preservados.\nGlândulas lacrimais sem particularidades.\nNão foram observados realces anômalos após a administração de contraste paramagnético.\nQuiasma óptico de aspecto normal.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DAS ÓRBITAS\n\nTÉCNICA\nExame de ressonância magnética das órbitas realizado com aquisições multiplanares pela técnica spin-eco pesada em T1 antes e após a administração endovenosa de contraste paramagnético (gadolínio) e técnica turbo spin-eco pesada em T2.\n\nRELATÓRIO\nGlobos oculares de contornos regulares apresentando sinal de aspecto normal.\nNervos ópticos, gordura intra e extra-conais e musculatura extrínseca ocular preservados.\nGlândulas lacrimais sem particularidades.\nNão foram observados realces anômalos após a administração de contraste paramagnético.\nQuiasma óptico de aspecto normal.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n"
            },
            {
                nome: "PESCOÇO",
                texto:"Exame normal",
                tags:"Exame normal ",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DO PESCOÇO\n\nTÉCNICA\nExame de ressonância magnética do pescoço realizado com aquisições multiplanares, pelas técnicas de spin-eco com seqüências pesadas em T1 sem a administração endovenosa de contraste paramagnético e técnica de fast spin-eco pesada em T2.\n\nRELATÓRIO\nFaringe e laringe de aspecto preservado.\nGlândulas parótidas e submandibulares sem alterações.\nGlândula tireóide sem particularidades.\nNão se evidenciam linfonodomegalias.\nNão se observam realces anômalos focais.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DO PESCOÇO\n\nTÉCNICA\nExame de ressonância magnética do pescoço realizado com aquisições multiplanares, pelas técnicas de spin-eco com seqüências pesadas em T1 antes e após a administração endovenosa de contraste paramagnético e técnica de fast spin-eco pesada em T2.\n\nRELATÓRIO\nFaringe e laringe de aspecto preservado.\nGlândulas parótidas e submandibulares sem alterações.\nGlândula tireóide sem particularidades.\nNão se evidenciam linfonodomegalias.\nNão se observam realces anômalos focais.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n"
            },
            {
                nome: "OSSOS TEMPORAIS",
                texto:"Exame normal",
                tags:"Exame normal ",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DOS OSSOS TEMPORAIS\n\nTÉCNICA\nExame de ressonância magnética dos ossos temporais realizado com aquisições multiplanares pelas técnicas de spin-eco com seqüências pesadas em T1 sem a administração endovenosa de contraste paramagnético, técnica de fast spin-eco pesada em T2, sequência de difusão, FLAIR e seqüência FIESTA.\n\nRELATÓRIO\nCócleas, canais semicirculares e vestíbulos com intensidade de sinal e morfologia habituais.\nCondutos auditivos internos simétricos, com dimensões normais.\nEstruturas do labirinto membranoso com intensidade de sinal habitual.\nTrajeto cisternal e intracanalicular do VII e VIII pares de configuração anatômica.\nNão há evidência de processo expansivo nas cisternas do ângulo ponto cerebelar.\nTronco cerebral e hemisférios cerebelares de aspecto preservado.\nNão há áreas de realce anômalo pelo agente paramagnético.\n\nOPINIÃO:\nEstudo de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA MAGNÉTICA DOS OSSOS TEMPORAIS\n\nTÉCNICA\nExame de ressonância magnética dos ossos temporais realizado com aquisições multiplanares pelas técnicas de spin-eco com seqüências pesadas em T1 antes e após a administração endovenosa de contraste paramagnético, técnica de fast spin-eco pesada em T2, sequência de difusão, FLAIR e seqüência FIESTA.\n\nRELATÓRIO\nCócleas, canais semicirculares e vestíbulos com intensidade de sinal e morfologia habituais.\nCondutos auditivos internos simétricos, com dimensões normais.\nEstruturas do labirinto membranoso com intensidade de sinal habitual.\nTrajeto cisternal e intracanalicular do VII e VIII pares de configuração anatômica.\nNão há evidência de processo expansivo nas cisternas do ângulo ponto cerebelar.\nTronco cerebral e hemisférios cerebelares de aspecto preservado.\nNão há áreas de realce anômalo pelo agente paramagnético.\n\nOPINIÃO:\nEstudo de ressonância magnética dentro dos limites da normalidade.\n"
            },
            {
                nome: "ARTICULAÇÕES TÊMPORO-MANDIBULARES",
                texto:"Exame normal",
                tags:"Exame normal ",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DAS ARTICULAÇÕES TÊMPORO-MANDIBULARES\n\nTÉCNICA\nExame de ressonância magnética das articulações têmporo-mandibulares, realizado com a técnica de fast spin-eco, com cortes sagitais oblíquos e coronais pesados em T1, STIR e DP, com boca aberta e fechada. Não foi realizada a administração endovenosa de contraste paramagnético.\n\nRELATÓRIO\nCavidades articulares de contornos regulares.\nCôndilos mandibulares de morfologia preservada.\nDiscos articulares tópicos e de morfologia habitual.\nDeslocamento com recaptura satisfatória do disco articular (direito/esquerdo).\nDeslocamento sem recaptura satisfatória do disco articular (direito/esquerdo).\nExcursão simétrica e adequada dos côndilos à abertura bucal.\nExcursão assimétrica dos côndilos à abertura bucal, menor à (direita/esquerda).\nExcursão reduzida dos côndilos mandibulares.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n",
                laudo_SemContraste:"RESSONÂNCIA MAGNÉTICA DAS ARTICULAÇÕES TÊMPORO-MANDIBULARES\n\nTÉCNICA\nExame de ressonância magnética das articulações têmporo-mandibulares, realizado com a técnica de fast spin-eco, com cortes sagitais oblíquos e coronais pesados em T1, STIR e DP, com boca aberta e fechada. Foi realizada a administração endovenosa de contraste paramagnético.\n\nRELATÓRIO\nCavidades articulares de contornos regulares.\nCôndilos mandibulares de morfologia preservada.\nDiscos articulares tópicos e de morfologia habitual.\nDeslocamento com recaptura satisfatória do disco articular (direito/esquerdo).\nDeslocamento sem recaptura satisfatória do disco articular (direito/esquerdo).\nExcursão simétrica e adequada dos côndilos à abertura bucal.\nExcursão assimétrica dos côndilos à abertura bucal, menor à (direita/esquerda).\nExcursão reduzida dos côndilos mandibulares.\n\nOPINIÃO\nEstudo de ressonância magnética dentro dos limites da normalidade.\n"
            },
        ],
        coluna:[
            {
                nome: "Cervical",
                texto:"Exame normal",
                tags:"Exame normal",
                laudo_SemContraste:"RESSONÂNCIA DE COLUNA CERVICAL\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nForam realizados sequências pesadas em T1 sem a injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nTransição craniovertebral normal.\nBom alinhamento dos corpos vertebrais examinados em decúbito.\nCorpos vertebrais com morfologia e sinal normal.\nArticulações uncovertebrais e interapofisárias de aspecto habitual.\nDiscos intervertebrais com morfologia e intensidade de sinal preservadas. Não se observam sinais de protusão ou extrusão discal.\nNível C2-C3:\nNível C3-C4:\nNível C4-C5:\nNível C5-C6:\nNível C6-C7:\nNível C7-T1:\nCanal vertebral e forames intervertebrais com amplitudes preservadas nos segmentos avaliados.\nMedula espinhal com morfologia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA DE COLUNA CERVICAL\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nForam realizados sequências pesadas em T1 após a injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nTransição craniovertebral normal.\nBom alinhamento dos corpos vertebrais examinados em decúbito.\nCorpos vertebrais com morfologia e sinal normal.\nArticulações uncovertebrais e interapofisárias de aspecto habitual.\nDiscos intervertebrais com morfologia e intensidade de sinal preservadas. Não se observam sinais de protusão ou extrusão discal.\nNível C2-C3:\nNível C3-C4:\nNível C4-C5:\nNível C5-C6:\nNível C6-C7:\nNível C7-T1:\nCanal vertebral e forames intervertebrais com amplitudes preservadas nos segmentos avaliados.\nMedula espinhal com morfologia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "Dorsal",
                texto:"Exame normal",
                tags:"Exame normal / Torácica",
                laudo_SemContraste:"RESSONÂNCIA DE COLUNA TORÁCICA\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nAusência de injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nBom alinhamento dos corpos vertebrais examinandos em decúbito.\nCorpos vertebrais com morfologia e sinal normais.\nArticulações interapofisárias e costovertebrais de aspecto habitual.\nDiscos intervertebrais com morfologia, sinal e contornos normais. Não se observam sinais de protrusão ou extrusão discal.\nCanal vertebral e forames intervertebrais com aplitude preservada nos segmentos avaliados.\nMedula espinhal e cone medular com morfologia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA DE COLUNA TORÁCICA\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nForam realizados sequências pesadas em T1 após a injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nBom alinhamento dos corpos vertebrais examinandos em decúbito.\nCorpos vertebrais com morfologia e sinal normais.\nArticulações interapofisárias e costovertebrais de aspecto habitual.\nDiscos intervertebrais com morfologia, sinal e contornos normais. Não se observam sinais de protrusão ou extrusão discal.\nCanal vertebral e forames intervertebrais com aplitude preservada nos segmentos avaliados.\nMedula espinhal e cone medular com morfologia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "Lombar",
                texto:"Exame normal",
                tags:"Exame normal / Lombosacra",
                laudo_SemContraste:"RESSONÂNCIA DE COLUNA LOMBAR\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nAusência de injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nBom alinhamento dos corpos vertebrais examinados em decúbito.\nCorpos vertebrais com morfologia e sinal normal.\nArticulações interapofisárias de aspecto habitual.\nDiscos intervertebrais com morfologia e intensidade de sinal preservadas. Não se observam sinais de protusão ou extrusão discal.\nNível T12-L1:\nNível L1-L2:\nNível L2-L3:\nNível L3-L4:\nNível L4-L5:\nNível L5-S1:\nCanal vertebral e forames intervertebrais com amplitudes preservadas nos segmentos avaliados.\nCone medular e cauda equina com topografia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n",
                laudo_ComContraste:"RESSONÂNCIA DE COLUNA LOMBAR\n\nMÉTODO\nExame realizado com a técnica Spin-Eco e Turbo Spin-Eco com imagens multiplanares em T1 e T2.\nForam realizados sequências pesadas em T1 após a injeção venosa do meio de contraste paramagnético.\n\nANÁLISE\nBom alinhamento dos corpos vertebrais examinados em decúbito.\nCorpos vertebrais com morfologia e sinal normal.\nArticulações interapofisárias de aspecto habitual.\nDiscos intervertebrais com morfologia e intensidade de sinal preservadas. Não se observam sinais de protusão ou extrusão discal.\nNível T12-L1:\nNível L1-L2:\nNível L2-L3:\nNível L3-L4:\nNível L4-L5:\nNível L5-S1:\nCanal vertebral e forames intervertebrais com amplitudes preservadas nos segmentos avaliados.\nCone medular e cauda equina com topografia e sinais normais.\nMusculatura paravertebral com morfologia e sinal normais.\n\nOPINIÃO\nExame dentro dos limites da normalidade.\n"
            },
            
        ]


    },
    ultrassonografia:{
        // todos_Exames:[
        //     {
        //         nome: "ULTRASSONOGRAFIA DA TIREÓIDE",
        //         texto:"Exame normal",
        //         tags:"Modo B",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:" ULTRASSONOGRAFIA DA TIREÓIDE \n\nRELATÓRIO:\nTireóide tópica, móvel à deglutição, com dimensões normais, contornos regulares, ecotextura homogênea e ecogenicidade usual.\n\nAusência de nodulações tireoideanas sólidas ou císticas.\nMedidas:\nLobo direito: ______ (volume de cm³).\nLobo esquerdo: ______ (volume de cm³).\nIstmo: ______ mm.\nVolume total da glândula: ______ cm³.\nO volume normal da glândula tireóide é de aproximadamente 3 a 15 cm³.\n\nGrandes vasos cervicais pérvios e com calibres normais.\nNão foram identificadas anormalidades morfológicas em linfonodos cervicais satélites.\n\nIMPRESSÃO:\n Estudo ultrassonográfico dentro dos limites da normalidade.\n\nCom os cumprimentos"
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA DA TIREÓIDE COM DOPPLER",
        //         texto:"Exame normal",
        //         tags:"Doppler",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA DA TIREÓIDE COM DOPPLER\n\nRELATÓRIO:\nTireóide tópica, móvel à deglutição, com dimensões normais, contornos regulares, ecotextura homogênea e ecogenicidade usual.\n\nAusência de nodulações tireoideanas sólidas ou císticas.\nMedidas:\nLobo direito: ______ (volume de cm³).\nLobo esquerdo: ______ (volume de cm³).\nIstmo: ______ mm.\nVolume total da glândula: ______ cm³.\nO volume normal da glândula tireóide é de aproximadamente 3 a 15 cm³.\nPerfusão vascular parenquimatosa uniforme e simétrica ao Doppler de amplitude.\nVelocidades de pico sistólico normais nas artérias tireoideanas (<40 cm/s), demonstrando ausência de atividade inflamatória significativa.\n\nGrandes vasos cervicais pérvios e com calibres normais.\nNão foram identificadas anormalidades morfológicas em linfonodos cervicais satélites.\n\nIMPRESSÃO:\n Estudo ultrassonográfico dentro dos limites da normalidade.\n\nCom os cumprimentos,"
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA CERVICAL",
        //         texto:"Exame normal",
        //         tags:"Modo B",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA CERVICAL\n\nRELATÓRIO:\nPele e tecido celular subcutâneo com espessura e ecotextura usuais.\nNão foram identificadas anormalidades morfológicas em linfonodos cervicais.\nGrandes vasos cervicais pérvios e com calibres normais.\n\nIMPRESSÃO:\n Estudo ultrassonográfico dentro dos limites da normalidade.\n\nCom os cumprimentos,"
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA CERVICAL",
        //         texto:"Exame normal",
        //         tags:"Modo B",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA CERVICAL\n\nRELATÓRIO:\nPele e tecido celular subcutâneo com espessura e ecotextura usuais.\nNão foram identificadas anormalidades morfológicas em linfonodos cervicais.\nGrandes vasos cervicais pérvios e com calibres normais.\n\nIMPRESSÃO:\n Estudo ultrassonográfico dentro dos limites da normalidade.\n\nCom os cumprimentos,"
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
        //         texto:"Exame normal / Urgênte",
        //         tags:"Modo B /   VB+",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
        //         texto:"Exame normal / Urgênte",
        //         tags:"Modo B /   VB+",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
        //         texto:"Exame normal / Rotina",
        //         tags:"Modo B /   VB+",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
        //         texto:"Exame normal / Rotina",
        //         tags:"Modo B /   VB+",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
        //         texto:"Exame normal / Rotina",
        //         tags:"Modo B /   VB-",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },
        //     {
        //         nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
        //         texto:"Exame normal / Rotina",
        //         tags:"Modo B /   VB-",
        //         laudo_SemContraste:"sem exame",
        //         laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
        //     },



        // ],
        abdomen:[
            /////////////////////////////////////////////////////////
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Urgênte",
                tags:"Modo B /   VB+ ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Urgênte",
                tags:"Modo B /   VB+ ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB+ ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB+ ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB- ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB- ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
        ],
        abdomen_Frases:[
            /////////////////////////////////////////////////////////
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Urgênte",
                tags:"Modo B /   VB+ / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas.\n\n\n\nPaciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n\nObs: Panículo adiposo dificultando avaliação.\n\nFígado com forma, dimensões e contornos normais e ecogenicidade difusamente aumentada. (Sinais de esteatose hepática leve/moderada/acentuada Grau I/II/II)Fígado com forma, dimensões e contornos normais. Textura homogênea, exceto por nódulo hiperecogênico, de contornos regulares, localizado no lobo direito, medindo 0,9 x 0,7 x 0,9 cm, que pode corresponder a hemangioma.\n\nVesícula biliar normodistendida, com paredes finas e lisas, apresentando cálculos no seu interior, medindo cm. (Colecistopatia calculosa)Pâncreas parcialmente caracterizado, com formas, contornos, dimensões normais e ecotextura homogênea.\n\nPâncreas não caracterizado, devido intensa interposição gasosa.\n\nAorta não caracterizada, devido intensa interposição gasosa.\n\nAorta ateromatosa.\n\nAorta parcialmente caracterizada, com calibre e contornos normais.\n\nBaço com dimensões aumentadas (Esplenomegalia)\n\nBexiga hipodistendida, com conteúdo anecoico.\n\nBexiga vazia.\n\nEctasia do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo.\n\nLeve/Moderada/Acentuada dilatação do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo. (Leve/Moderada/Acentuada hidronefrose à direita/esquerda.)Imagem hiperecogênica no terço médio do rim direito, não formadora de sombra acústica posterior, medindo 0,3 cm, podendo corresponder a cálculo. (Imagem sugestiva de nefrolitíase à direita/esquerda)Cálculo no terço médio do rim direito/esquerdo, medindo cm. (Nefrolitíase à direita/esquerda)Cisto anecoico, de paredes finas e lisas, no medindo cm. (Cisto renal à direita/esquerda)Leve/moderada/acentuada quantidade de líquido livre em cavidade abdominal. (Ascite leve/moderada/acentuada)Imagem tubular localizada na fossa ilíaca direita, que termina em fundo cego, com calibre de 0,7 cm, que pode corresponder ao apêndice cecal.\n\n</p>"
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Urgênte",
                tags:"Modo B /   VB+ / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nExame realizado em caráter de urgência.\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas.\n\n\n\nPaciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n\nObs: Panículo adiposo dificultando avaliação.\n\nFígado com forma, dimensões e contornos normais e ecogenicidade difusamente aumentada. (Sinais de esteatose hepática leve/moderada/acentuada Grau I/II/II)Fígado com forma, dimensões e contornos normais. Textura homogênea, exceto por nódulo hiperecogênico, de contornos regulares, localizado no lobo direito, medindo 0,9 x 0,7 x 0,9 cm, que pode corresponder a hemangioma.\n\nVesícula biliar normodistendida, com paredes finas e lisas, apresentando cálculos no seu interior, medindo cm. (Colecistopatia calculosa)Pâncreas parcialmente caracterizado, com formas, contornos, dimensões normais e ecotextura homogênea.\n\nPâncreas não caracterizado, devido intensa interposição gasosa.\n\nAorta não caracterizada, devido intensa interposição gasosa.\n\nAorta ateromatosa.\n\nAorta parcialmente caracterizada, com calibre e contornos normais.\n\nBaço com dimensões aumentadas (Esplenomegalia)\n\nBexiga hipodistendida, com conteúdo anecoico.\n\nBexiga vazia.\n\nEctasia do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo.\n\nLeve/Moderada/Acentuada dilatação do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo. (Leve/Moderada/Acentuada hidronefrose à direita/esquerda.)Imagem hiperecogênica no terço médio do rim direito, não formadora de sombra acústica posterior, medindo 0,3 cm, podendo corresponder a cálculo. (Imagem sugestiva de nefrolitíase à direita/esquerda)Cálculo no terço médio do rim direito/esquerdo, medindo cm. (Nefrolitíase à direita/esquerda)Cisto anecoico, de paredes finas e lisas, no medindo cm. (Cisto renal à direita/esquerda)Leve/moderada/acentuada quantidade de líquido livre em cavidade abdominal. (Ascite leve/moderada/acentuada)Imagem tubular localizada na fossa ilíaca direita, que termina em fundo cego, com calibre de 0,7 cm, que pode corresponder ao apêndice cecal.\n\n</p>"
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB+ / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas."
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB+ / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar normodistendida, com paredes finas e lisas, sem imagens sugestivas de cálculos no seu interior.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas.\n\n\n\nPaciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n\nObs: Panículo adiposo dificultando avaliação.\n\nFígado com forma, dimensões e contornos normais e ecogenicidade difusamente aumentada. (Sinais de esteatose hepática leve/moderada/acentuada Grau I/II/II)Fígado com forma, dimensões e contornos normais. Textura homogênea, exceto por nódulo hiperecogênico, de contornos regulares, localizado no lobo direito, medindo 0,9 x 0,7 x 0,9 cm, que pode corresponder a hemangioma.\n\nVesícula biliar normodistendida, com paredes finas e lisas, apresentando cálculos no seu interior, medindo cm. (Colecistopatia calculosa)Pâncreas parcialmente caracterizado, com formas, contornos, dimensões normais e ecotextura homogênea.\n\nPâncreas não caracterizado, devido intensa interposição gasosa.\n\nAorta não caracterizada, devido intensa interposição gasosa.\n\nAorta ateromatosa.\n\nAorta parcialmente caracterizada, com calibre e contornos normais.\n\nBaço com dimensões aumentadas (Esplenomegalia)\n\nBexiga hipodistendida, com conteúdo anecoico.\n\nBexiga vazia.\n\nEctasia do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo.\n\nLeve/Moderada/Acentuada dilatação do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo. (Leve/Moderada/Acentuada hidronefrose à direita/esquerda.)Imagem hiperecogênica no terço médio do rim direito, não formadora de sombra acústica posterior, medindo 0,3 cm, podendo corresponder a cálculo. (Imagem sugestiva de nefrolitíase à direita/esquerda)Cálculo no terço médio do rim direito/esquerdo, medindo cm. (Nefrolitíase à direita/esquerda)Cisto anecoico, de paredes finas e lisas, no medindo cm. (Cisto renal à direita/esquerda)Leve/moderada/acentuada quantidade de líquido livre em cavidade abdominal. (Ascite leve/moderada/acentuada)Imagem tubular localizada na fossa ilíaca direita, que termina em fundo cego, com calibre de 0,7 cm, que pode corresponder ao apêndice cecal.\n\n</p>"
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME TOTAL",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB- / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME TOTAL\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nBexiga de forma, contornos e conteúdo normal.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas.\n\n\n\nPaciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n\nObs: Panículo adiposo dificultando avaliação.\n\nFígado com forma, dimensões e contornos normais e ecogenicidade difusamente aumentada. (Sinais de esteatose hepática leve/moderada/acentuada Grau I/II/II)Fígado com forma, dimensões e contornos normais. Textura homogênea, exceto por nódulo hiperecogênico, de contornos regulares, localizado no lobo direito, medindo 0,9 x 0,7 x 0,9 cm, que pode corresponder a hemangioma.\n\nVesícula biliar normodistendida, com paredes finas e lisas, apresentando cálculos no seu interior, medindo cm. (Colecistopatia calculosa)Pâncreas parcialmente caracterizado, com formas, contornos, dimensões normais e ecotextura homogênea.\n\nPâncreas não caracterizado, devido intensa interposição gasosa.\n\nAorta não caracterizada, devido intensa interposição gasosa.\n\nAorta ateromatosa.\n\nAorta parcialmente caracterizada, com calibre e contornos normais.\n\nBaço com dimensões aumentadas (Esplenomegalia)\n\nBexiga hipodistendida, com conteúdo anecoico.\n\nBexiga vazia.\n\nEctasia do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo.\n\nLeve/Moderada/Acentuada dilatação do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo. (Leve/Moderada/Acentuada hidronefrose à direita/esquerda.)Imagem hiperecogênica no terço médio do rim direito, não formadora de sombra acústica posterior, medindo 0,3 cm, podendo corresponder a cálculo. (Imagem sugestiva de nefrolitíase à direita/esquerda)Cálculo no terço médio do rim direito/esquerdo, medindo cm. (Nefrolitíase à direita/esquerda)Cisto anecoico, de paredes finas e lisas, no medindo cm. (Cisto renal à direita/esquerda)Leve/moderada/acentuada quantidade de líquido livre em cavidade abdominal. (Ascite leve/moderada/acentuada)Imagem tubular localizada na fossa ilíaca direita, que termina em fundo cego, com calibre de 0,7 cm, que pode corresponder ao apêndice cecal.\n\n</p>"
            },
            {
                nome: "ULTRASSONOGRAFIA ABDOME SUPERIOR",
                texto:"Exame normal / Rotina",
                tags:"Modo B /   VB- / + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA ABDOME SUPERIOR\n\nRELATÓRIO\nFígado com forma, dimensões e contornos normais. Textura homogênea.\nVesícula biliar não caracterizada.\nVias biliares intra e extra-hepáticas de calibres preservados.\nPâncreas com formas, contornos, dimensões e ecotextura normais.\nBaço com forma, contornos, dimensões e textura normais.\nAorta com calibre e contornos normais.\nRins tópicos, com forma, contornos e dimensões normais.\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nAusência de líquido livre em cavidade abdominal.\nApêndice cecal não caracterizado.\n\nCONCLUSÃO:\nExame sem alterações significativas.\n\n\n\nPaciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n\nObs: Panículo adiposo dificultando avaliação.\n\nFígado com forma, dimensões e contornos normais e ecogenicidade difusamente aumentada. (Sinais de esteatose hepática leve/moderada/acentuada Grau I/II/II)Fígado com forma, dimensões e contornos normais. Textura homogênea, exceto por nódulo hiperecogênico, de contornos regulares, localizado no lobo direito, medindo 0,9 x 0,7 x 0,9 cm, que pode corresponder a hemangioma.\n\nVesícula biliar normodistendida, com paredes finas e lisas, apresentando cálculos no seu interior, medindo cm. (Colecistopatia calculosa)Pâncreas parcialmente caracterizado, com formas, contornos, dimensões normais e ecotextura homogênea.\n\nPâncreas não caracterizado, devido intensa interposição gasosa.\n\nAorta não caracterizada, devido intensa interposição gasosa.\n\nAorta ateromatosa.\n\nAorta parcialmente caracterizada, com calibre e contornos normais.\n\nBaço com dimensões aumentadas (Esplenomegalia)\n\nBexiga hipodistendida, com conteúdo anecoico.\n\nBexiga vazia.\n\nEctasia do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo.\n\nLeve/Moderada/Acentuada dilatação do sistema pielo-calicial à direita/esquerda, sem caracterizar ponto obstrutivo. (Leve/Moderada/Acentuada hidronefrose à direita/esquerda.)Imagem hiperecogênica no terço médio do rim direito, não formadora de sombra acústica posterior, medindo 0,3 cm, podendo corresponder a cálculo. (Imagem sugestiva de nefrolitíase à direita/esquerda)Cálculo no terço médio do rim direito/esquerdo, medindo cm. (Nefrolitíase à direita/esquerda)Cisto anecoico, de paredes finas e lisas, no medindo cm. (Cisto renal à direita/esquerda)Leve/moderada/acentuada quantidade de líquido livre em cavidade abdominal. (Ascite leve/moderada/acentuada)Imagem tubular localizada na fossa ilíaca direita, que termina em fundo cego, com calibre de 0,7 cm, que pode corresponder ao apêndice cecal.\n\n</p>"
            },
            {
                nome: "ULTRASSONOGRAFIA DE RINS E VIAS URINARIAS",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DE RINS E VIAS URINARIAS\n\nParênquima renal com espessura e ecogenicidade preservadas.\nNão há sinais de dilatação do sistema pielo-calicial.\nNão há imagens sugestivas de cálculos.\nRim direito tópico, com forma, contornos e dimensões normais.\nRim DIR. mede:  cm.\nEspessura do Parênquima:  cm\nRim esquerdo tópico, com forma, contornos e dimensões normais.\nRim ESQ. mede:  cm.\nEspessura do Parênquima: cm\nBexiga de forma, contornos e conteúdo normal.\nCONCLUSÃO:\n\n Exame sem alterações significativas.\n"
            },
        ],
        pequenas_partes: [
            {
                nome: "ULTRASSONOGRAFIA CERVICAL",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DA REGIÃO CERVICAL\n\nRELATÓRIO:\nPele e tecido celular subcutâneo com espessura e ecotextura usuais.\nGlândulas submandibulares de forma, contornos, dimensões e ecogenicidade normais.\nGlândulas parótidas de forma, contornos, dimensões e ecogenicidade normais.\nLobos tireoideanos de dimensões preservados, contornos regulares e ecotextura homogênea.\nNão houve evidências de linfonodomegalias cervicais.\nGrandes vasos cervicais pérvios e com calibres normais.\n\nConclusão:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n"
            },
            {
                nome: "ULTRASSONOGRAFIA CERVICAL COM DOPPLER",
                texto:"Exame normal",
                tags:"Doppler",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DA REGIÃO CERVICAL COM DOPPLER\n\nRELATÓRIO:\nPele e tecido celular subcutâneo com espessura e ecotextura usuais.\nGlândulas submandibulares de forma, contornos, dimensões e ecogenicidade normais.\nGlândulas parótidas de forma, contornos, dimensões e ecogenicidade normais.\nLobos tireoideanos de dimensões preservados, contornos regulares e ecotextura homogênea.\nNão houve evidências de linfonodomegalias cervicais.\nGrandes vasos cervicais pérvios e com calibres normais.\nAusência de fluxo anômalo ao estudo Doppler\n\nConclusão:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n"
            },
            {
                nome: "ULTRASSONOGRAFIA TIREOIDE",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DE TIREOIDE\n\nLobos tireoideanos de dimensões preservadas, contornos regulares e textura homogênea, com ecogenicidade preservada.\nIstmo homogêneo, sem evidências de alterações focais.\n\nO lobo tireoideano direito mede: _________ cm. Vol:  _________ cm³\nO lobo tireoideano esquerdo mede: _________ cm. Vol:  _________ cm³.\nO istmo mede: _________  cm de espessura.\nVolume tireoideano: _________  cm³.\n\nNão há evidências de linfonodomegalias cervicais.\n\nOpinião:\nEstudo ultrassonográfico da tireoide sem evidências de anormalidades."
            },
            {
                nome: "ULTRASSONOGRAFIA TIREOIDE COM DOPPLER ",
                texto:"Exame normal",
                tags:"Doppler",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DE TIREOIDE\n\nLobos tireoideanos de dimensões preservadas, contornos regulares e textura homogênea, com ecogenicidade preservada.\nIstmo homogêneo, sem evidências de alterações focais.\n\nO lobo tireoideano direito mede: _________ cm. Vol:  _________ cm³\nO lobo tireoideano esquerdo mede: _________ cm. Vol:  _________ cm³.\nO istmo mede: _________  cm de espessura.\nVolume tireoideano: _________  cm³.\n\nNão há evidências de linfonodomegalias cervicais.\nAusência de fluxo anômalo ao estudo Doppler\n\nOpinião:\nEstudo ultrassonográfico da tireoide sem evidências de anormalidades."
            },
            {
                nome: "ULTRASSONOGRAFIA TIREOIDE COM DOPPLER 1",
                texto:"Exame normal",
                tags:"Doppler",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DE TIREOIDE\n\nLobos tireoideanos de dimensões preservadas, contornos regulares e textura homogênea, com ecogenicidade preservada.\nIstmo homogêneo, sem evidências de alterações focais.\n\nO lobo tireoideano direito mede: _________ cm. Vol:  _________ cm³\nO lobo tireoideano esquerdo mede: _________ cm. Vol:  _________ cm³.\nO istmo mede: _________  cm de espessura.\nVolume tireoideano: _________  cm³.\n\nNão há evidências de linfonodomegalias cervicais.\nAusência de fluxo anômalo ao estudo Doppler\nAs artérias tireoidianas inferiores tem fluxo habitual.\n\nOpinião:\nEstudo ultrassonográfico da tireoide sem evidências de anormalidades."
            },
            {
                nome: "ULTRASSONOGRAFIA TIREOIDE COM DOPPLER 2",
                texto:"Exame normal",
                tags:"Doppler",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DE TIREOIDE\n\nLobos tireoideanos de dimensões preservadas, contornos regulares e textura homogênea, com ecogenicidade preservada.\nIstmo homogêneo, sem evidências de alterações focais.\n\nO lobo tireoideano direito mede: _________ cm. Vol:  _________ cm³\nO lobo tireoideano esquerdo mede: _________ cm. Vol:  _________ cm³.\nO istmo mede: _________  cm de espessura.\nVolume tireoideano: _________  cm³.\n\nNão há evidências de linfonodomegalias cervicais.\nAusência de fluxo anômalo ao estudo Doppler\nO fluxo da artéria tireóidiana direita é estimado em ______ cm/s ( Normal < 30 cm/s )\nO fluxo da artéria tireóidiana esquerda é estimado em ______ cm/s ( Normal < 30 cm/s )\n\nOpinião:\nEstudo ultrassonográfico da tireoide sem evidências de anormalidades."
            },

            {
                nome: "ULTRASSONOGRAFIA DA PAREDE ABDOMINAL",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DA PAREDE ABDOMINAL\n\nRELATÓRIO:\nExame voltado para a região __________ \nPele e tecido subcutâneo com espessura e ecogenicidade normais.\nMúsculos reto abdominal e oblíquos com trofismo e arquitetura fibrilar preservados.\nNão se observam formações sólidas ou coleções líquidas nas áreas avaliadas.\nAusência de hérnias da parede abdominal anterior ou diastase do reto abdominal.\n\nOPINIÃO:\nEstudo ultrassonográfico sem evidentes anormalidades apreciáveis ao método.\n"
            },
            {
                nome: "ULTRASSONOGRAFIA DE PARTES MOLES",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DE PARTES MOLES\n\nRELATÓRIO:\nExame voltado para a região __________ \nPele e tecido celular subcutâneo conservados.\nPlanos musculares íntegros, com estruturas fibrilares alinhadas e preservadas, sem evidências de roturas.\nAusência de formações nodulares ou coleções.\n\nOPINIÃO:\nEstudo ultrassonográfico sem anormalidades detectáveis ao método."
            },

            {
                nome: "USG DA REGIÃO INGUINAL DIREITA / ESQUERDA",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DA REGIÃO INGUINAL DIREITA / ESQUERDA \n\nRELATÓRIO:\nPele de aspecto anatômico.\nTecido subcutâneo preservado, ausência de nódulos ou coleções.\nTecidos musculares íntegros.\n\nCONCLUSÃO:\nEstudo ecográfico normal.\nObs: Paciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n"
            },

            {
                nome: "USG DA REGIÃO INGUINAL DIREITA / ESQUERDA",
                texto:"Patológico",
                tags:"Modo B /Patológico",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DE REGIÃO INGUINAL DIREITA / ESQUERDA\n\nRELATÓRIO: \nPele de aspecto anatômico.\nTecido subcutâneo preservado, ausência de nódulos ou coleções.\nProtrusão de conteúdo omental na região inguinal direita / esquerda variante / não variante com as manabras de Valsalva.\nProtrusão de conteúdo omental e de alças intestinais na região inguinal direita / esquerda variante / não variante com as manabras de Valsalva.\n\nCONCLUSÃO:\nHérnia inguinal direita / esquerda \nObs: Paciente sem exames anteriores.\n\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico."
            },

            {
                nome: "USG DA REGIÃO UMBILICAL",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DA REGIÃO UMBILICAL \nExame voltado para a região __________\nPele de aspecto anatômico.\nTecido subcutâneo preservado, ausência de nódulos ou coleções.\nTecidos musculares íntegros.\n\nCONCLUSÃO:\nEstudo ecográfico normal.\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico."
            },

            {
                nome: "USG DA REGIÃO AXILAR",
                texto:"Exame normal",
                tags:"Modo B",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA DA REGIÃO AXILAR DIREITA / ESQUERDA \nExame voltado para a região __________\nPele de aspecto anatômico.\nTecido subcutâneo preservado, ausência de nódulos ou coleções.\nTecidos musculares íntegros.\n\nCONCLUSÃO:\nEstudo ecográfico normal.\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico."
            },

            {
                nome: "USG TESTICULAR",
                texto:"Exame normal",
                tags:"Modo B / Testiculo",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA TESTICULAR\n\nRELATÓRIO:\nTestículos com dimensões normais, contornos regulares e ecotextura homogênea.\nAusência de nodulações sólidas testiculares.\nTestículo direito mede      : _______  x _______   x  _______  cm (volume: cm³).\nTestículo esquerdo mede : _______  x _______   x  _______  cm (volume: cm³).\nVolume testicular normal em adultos: 12 - 23 cm³.\nEpidídimos de espessura e ecotextura normais.\nFunículos espermáticos com morfologia e dimensões normais.\nNão foi evidenciado aumento anômalo de líquido entre as camadas dos envoltórios testiculares.\nAusência de dilatação venosa dos plexos pampiniformes.\n\nOPINIÃO:\nEstudo ultrassonográfico sem anormalidades detectáveis ao método."
            },

            {
                nome: "USG TESTICULAR COM DOPPLER",
                texto:"Exame normal",
                tags:"Doppler / Testiculo",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA TESTICULAR COM DOPPLER\n\nRELATÓRIO:\nTestículos com dimensões normais, contornos regulares e ecotextura homogênea.\nAusência de nodulações sólidas testiculares.\nTestículo direito mede      : _______  x _______   x  _______  cm (volume: cm³).\nTestículo esquerdo mede : _______  x _______   x  _______  cm (volume: cm³).\nVolume testicular normal em adultos: 12 - 23 cm³.\nEpidídimos de espessura e ecotextura normais.\nFunículos espermáticos com morfologia e dimensões normais.\nNão foi evidenciado aumento anômalo de líquido entre as camadas dos envoltórios testiculares.\nAusência de dilatação venosa dos plexos pampiniformes.\nTestículos com perfusão vascular uniforme e simétrica.\nArtérias testiculares com fluxo de amplitude e velocidade normais.\nArtéria Testicular direita - índice de resistência: _____ .\nArtéria Testicular esquerda - índice de resistência: _____ .IR normal varia de 0,45 a 0,78.\nPlexos pampiniformes com calibres normais e fluxo venoso anterógrado típico, sem refluxo detectável à manobra de Valsalva.\n\nOPINIÃO:\nEstudo ultrassonográfico sem anormalidades detectáveis ao método."
            },
            {
                nome: "USG DE PÊNIS",
                texto:"Exame normal",
                tags:"Modo B / Penis",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DE PÊNIS\n\nRELATÓRIO:\nPele e subcutâneo conservados.\nCorpos cavernosos e esponjosos anatômicos, com morfologia habitual.\nTúnica albugínea e fáscia de Buck sem espessamentos.\nNão há sinais de calcificações patológicas.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n"
            },

        ],
        mamas:[
            {
                nome: "USG DE MAMAS",
                texto:"Exame normal",
                tags:"Mama + Birads",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA MAMÁRIA\n\nINDICAÇÃO:\nRastreamento.\n\nRELATÓRIO:\nPele e tecido adiposo subcutâneo com espessura e ecogenicidade normais.\nParênquima mamário com ecotextura fibroglandular usual e adequada lipossubstituição.\nNão se evidenciam nodulações sólidas ou císticas.\nProlongamentos axilares anatômicos.\n\nIMPRESSÃO:\nEstudo ultrassonográfico dentro dos limites da normalidade.\n\n\n\nBI-RADS USG: categoria 1.\nAchado benigno.\nBI-RADS USG: categoria 2.\nNódulo mamário <> provavelmente benigno.\nBI-RADS USG: categoria 3.\nRecomenda-se controle evolutivo ultrassonográfico em 6 / 12 meses.\nNódulo mamário <> suspeito.\nBI-RADS USG: categoria 4.\nEstudo histopatológico deve ser considerado.\nNódulo mamário <> altamente suspeito.\nBI-RADS USG: categoria 5.\nRecomendo prosseguir investigação com estudo histopatológico.\nEm caso de realização de nova mamografia ou ultrassonografia mamária, é necessário trazer exames anteriores."
            },
            {
                nome: "USG DE MAMAS",
                texto:"Exame normal",
                tags:"Modo B / mamaria simples",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA MAMÁRIA\n\nINDICAÇÃO:\nRastreamento.\n\nRELATÓRIO:\nPele e tecido adiposo subcutâneo com espessura e ecogenicidade normais.\nParênquima mamário com ecotextura fibroglandular usual e adequada lipossubstituição.\nNão se evidenciam nodulações sólidas ou císticas.\nProlongamentos axilares anatômicos.\n\nIMPRESSÃO:\nEstudo ultrassonográfico dentro dos limites da normalidade.\nBI-RADS USG: categoria 1.\nAchado benigno."
            },
            {
                nome: "USG DE MAMAS",
                texto:"Exame normal",
                tags:"Mama Birads + Frases",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA MAMÁRIA\n\nINDICAÇÃO:\nRastreamento.\n\nRELATÓRIO:\nPele e tecido adiposo subcutâneo com espessura e ecogenicidade normais.\nParênquima mamário com ecotextura fibroglandular usual e adequada lipossubstituição.\nNão se evidenciam nodulações sólidas ou císticas.\nProlongamentos axilares anatômicos.\n\nIMPRESSÃO:\nEstudo ultrassonográfico dentro dos limites da normalidade.\n\n\n\nBI-RADS USG: categoria 1.\nAchado benigno.\nBI-RADS USG: categoria 2.\nNódulo mamário <> provavelmente benigno.\nBI-RADS USG: categoria 3.\nRecomenda-se controle evolutivo ultrassonográfico em 6 / 12 meses.\nNódulo mamário <> suspeito.\nBI-RADS USG: categoria 4.\nEstudo histopatológico deve ser considerado.\nNódulo mamário <> altamente suspeito.\nBI-RADS USG: categoria 5.\nRecomendo prosseguir investigação com estudo histopatológico.\n----------------------\nNódulo hipoecogênico, de contornos regulares, com o maior eixo paralelo a pele, localizado as h da mama direita/esquerda, medindo cm, distando cm da pele, que pode corresponder a cisto espesso.\nCisto anecoico, de paredes finas e lisas, localizado as h da mama direita/esquerda, medindo cm.\nCisto anecoico, de paredes finas e lisa, localizado na região retroareolar na mama direita, medindo 0,8 x 0,4 cm.\nDilatação ductal da mama direita/esquerda.\nConglomerado cistisco, localizado na região retroareolar na mama direita, medindo 0,8 x 0,4 cm.\nConglomerado cistisco, localizado na região retroareolar na mama direita, medindo 0,8 x 0,4 cm.\nPróteses íntegras, de contornos regulares, conteúdo anecóico, sem sinais de ruptura Em caso de realização de nova mamografia ou ultrassonografia mamária, é necessário trazer exames anteriores.\n"
            },

        ],
        cranio_torax:[
            {
                nome: "USG TRANSFONTANELA",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA CRANIANA TRANSFONTANELA \n\n RELATORIO:\nParênquima cerebral de ecogenicidade preservada.\nSistema ventricular supra e infratentorial de dimensões e morfologia preservadas.\nPlexos coróides simétricos.\nAusência de calcificações patológicas.\nAusência de desvio das estruturas da linha mediana.\nFossa posterior de configuração habitual.\nA critério clínico, sugere-se controle ultrassonográfico.\n\nOPINIÃO:\nExame dentro dos limites da normalidade.\n"
            },
            {
                nome: "USG DO TÓRAX",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA DO TÓRAX\n\nRELATÓRIO:\nCúpulas diafragmáticas com boa mobilidade.\nAusência de sinais de derrame pleural.\n\nOPINIÃO:\nExame dentro dos limites da normalidade."
            },
        ],
        pelve_Masculina:[
            {
                nome: "USG Supra Púbico",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA PROSTÁTICA VIA ABDOMINAL\n\nRELATÓRIO: \nBEXIGA:  Repleta, de morfologia típica, paredes lisas, com espessura normal, contornos regulares, mucosa sem septos ou projeções para o seu interior. \nVolume pré miccional de _____ ml. \nResíduo urinário pós miccional de _____ ml. \nO resíduo pós miccional reflete a possibilidade de retenção urinária, sendo significativo quando acima de 100 ml. \n\nPRÓSTATA: Morfologia preservada, contornos regulares e bem definidos, com ecotextura heterogênea. \nMedidas: _____ x _____ x _____ cm, nos seus maiores diâmetros, correspondendo a um peso aproximado de _____ g. \n\nVESÍCULAS SEMINAIS: Morfologia preservada, contornos regulares, ecogenicidade homogênea, dimensões normais e simétricas. \n\nIMPRESSÃO:\nPeso prostático aproximado em _____ g. \nResíduo urinário pós miccional _____."
            },
            {
                nome: "USG Supra Púbico",
                texto:"Exame normal",
                tags:"Modo B / +Simplificado",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA PROSTÁTICA VIA ABDOMINAL\n\nRELATÓRIO: \nBEXIGA:  Repleta, de morfologia típica, paredes lisas, com espessura normal, contornos regulares, mucosa sem septos ou projeções para o seu interior. \nResíduo urinário pós miccional de _____ ml. \nO resíduo pós miccional reflete a possibilidade de retenção urinária, sendo significativo quando acima de 100 ml. \n\nPRÓSTATA: Morfologia preservada, contornos regulares e bem definidos, com ecotextura heterogênea. \nMedidas: _____ x _____ x _____ cm, nos seus maiores diâmetros, correspondendo a um peso aproximado de _____ g. \n\nVESÍCULAS SEMINAIS: Morfologia preservada, contornos regulares, ecogenicidade homogênea, dimensões normais e simétricas. \n\nIMPRESSÃO:\nPeso prostático aproximado em _____ g."
            },
            {
                nome: "USG Transretal",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA PROSTÁTICA VIA TRANSRETAL\n\nRELATÓRIO: \nBEXIGA: Em baixa repleção, de contornos regulares, sem septos ou projeções detectáveis para o seu interior. \n\nPRÓSTATA: Morfologia preservada, de contornos regulares e bem definidos, com ecotextura heterogênea. \nMedidas: ________ cm, nos seus maiores diâmetros, correspondendo a um peso aproximado de _____ g. \nZona periférica regular e homogênea, sem definição de áreas focais nodulares dominantes. \nGlândula interna (zona central e zona de transição) com ecotextura heterogênea, sem anormalidades focais suspeitas. \nCápsula prostática íntegra. \n\nVESÍCULAS SEMINAIS: Morfologia preservada, contornos regulares, ecotextura homogênea, dimensões normais e simétricas. \n\nIMPRESSÃO:\nPeso prostático aproximado em _____ g. \n"
            },
        ],
        pelve_Feminina:[
            {
                nome: "USG Supra Pubico",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA PELVICA (via supra-pubica).\n\nRELATÓRIO:\nBexiga com boa repleção, paredes de forma, contornos regulares e conteúdo anecóico.\nÚtero em AVF, com forma, contornos e dimensões normais.\nA textura miometrial é homogênea\nÚtero mede: cm ______ Vol.: ______ cm³.\nEco endometrial centrado, com ______  cm de espessura.\nOvário direito com forma, contornos, dimensões e textura normais.\nO.D.= ______  cm – Vol.= ______ cm³.\nOvário esquerdo com forma, contornos, dimensões e textura normais.\nO.E.= ______  cm – Vol.______  = cm³.\nNão há evidências de massas ou coleções anexiais.\nAusência de líquido livre em fundo-de-saco.\n\nCONCLUSÃO:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n"
            },
            {
                nome: "USG Supra Pubico",
                texto:"Exame normal",
                tags:"Modo B / sem medidas",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA PELVICA (via supra-pubica).\n\nRELATÓRIO:\nBexiga com boa repleção, paredes de forma, contornos regulares e conteúdo anecóico.\nÚtero em AVF, com forma, contornos e dimensões normais.\nA textura miometrial é homogênea\nEco endometrial centrado, espessura habitual\nOvário direito com forma, contornos, dimensões e textura normais.\nOvário esquerdo com forma, contornos, dimensões e textura normais.\nNão há evidências de massas ou coleções anexiais.\nAusência de líquido livre em fundo-de-saco.\n\nCONCLUSÃO:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n"
            },
            {
                nome: "USG Transvaginal",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA TRANSVAGINAL\n\nRELATÓRIO:\nBexiga vazia\nÚtero em AVF, com forma, contornos e dimensões normais.\nA textura miometrial é homogênea\nÚtero mede: cm  ______  Vol.: cm³.\nEco endometrial centrado, com ______  cm de espessura Ovário direito com forma, contornos, dimensões e textura normais.\nO.D.= ______  cm – Vol.= ______  cm³.\nOvário esquerdo com forma, contornos, dimensões e textura normais.\nO.E.= ______  cm – Vol.= ______  cm³.\nNão há evidências de massas ou coleções anexiais.\nAusência de líquido livre em fundo-de-saco.\n\nCONCLUSÃO:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n"
            },
            {
                nome: "USG Transvaginal",
                texto:"Exame normal",
                tags:"Modo B / sem medidas",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRA-SONOGRAFIA TRANSVAGINAL\n\nRELATÓRIO:\nBexiga vazia\nÚtero em AVF, com forma, contornos e dimensões normais.\nA textura miometrial é homogênea\nEco endometrial centrado, espessura habitual\nOvário direito com forma, contornos, dimensões e textura normais.\nOvário esquerdo com forma, contornos, dimensões e textura normais.\nNão há evidências de massas ou coleções anexiais.\nAusência de líquido livre em fundo-de-saco.\n\nCONCLUSÃO:\nEstudo ultrassonográfico dentro dos padrões da normalidade.\n\n\nObs: Paciente sem exames anteriores.\nA critério clínico correlacionar com dados clínicos, laboratoriais e outros métodos de diagnóstico.\n"
            },
        ],
        obstetrico:[
            {
                nome: "USG OBSTÉTRICA (1º TRIMESTRE)",
                texto:"Exame normal",
                tags:"Modo B ",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA OBSTÉTRICA (1º TRIMESTRE)\n\nTÉCNICA:\nExame realizado com transdutor endocavitário de alta freqüência.\n\nRELATÓRIO:\nData da última menstruação: ______ /______ /______ IG (menstrual): ______ semanas e ______ dias Útero aumentado de volume, contendo saco gestacional tópico, de contornos regulares, medindo ______ x ______ x ______ mm.\nDiâmetro médio de saco gestacional (DMSG) de ______ mm.\nVesícula vitelínica caracterizada, de aspecto habitual.\nConcepto único, com batimentos cardíacos em torno de ______ batimentos por minuto (bpm).\nComprimento cabeça- nádega (CCN) de ______ mm.\nTrofoblasto de inserção predominantemente anterior / posterior/difusa.\nColo uterino de aspecto habitual, apresentando orifício interno fechado e comprimento de ______ mm.\nOvários de aspecto habitual.\nCorpo lúteo em ovário direito / esquerdo.\n\nOPINIÃO:\nGestação única, tópica, de concepto vivo.\nBiometria compatível com ______ semanas e ______ dias (+/- 4 dias).\n"
            },
            {
                nome: "USG OBSTÉTRICA (1º TRIMESTRE)",
                texto:"Exame normal",
                tags:"Modo B / simplificado",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA OBSTÉTRICA (1º TRIMESTRE)\n\nTÉCNICA:\nExame realizado com transdutor endocavitário de alta freqüência.\n\nRELATÓRIO:\nÚtero aumentado de volume, contendo saco gestacional tópico, de contornos regulares.\nDiâmetro médio de saco gestacional (DMSG) de ______ mm.\nVesícula vitelínica caracterizada, de aspecto habitual.\nConcepto único, com batimentos cardíacos em torno de ______ batimentos por minuto (bpm).\nComprimento cabeça- nádega (CCN) de ______ mm.\nTrofoblasto de inserção predominantemente anterior / posterior/difusa.\nColo uterino de aspecto habitual, apresentando orifício interno fechado e comprimento de ______ mm.\nOvários de aspecto habitual.\nCorpo lúteo em ovário direito / esquerdo.\n\nOPINIÃO:\nGestação única, tópica, de concepto vivo.\nBiometria compatível com ______ semanas e ______ dias (+/- 4 dias).\n"
            },
            {
                nome: "USG OBSTÉTRICA (2º TRIMESTRE)",
                texto:"Exame normal",
                tags:"Modo B / simplificado",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA OBSTÉTRICA\n\nTÉCNICA:\nExame realizado com transdutor convexo de alta freqüência.\n\nRELATÓRIO:\nData da última menstruação: ______ /______ /______  IG (menstrual): ______  semanas e ______  dias Útero globoso e proeminente, apresentando em seu interior feto único, em situação ______ , apresentação ______ , com posição de dorso à ______ . O feto apresenta sinais vitais presentes, representados por movimentação ativa e batimentos cardíacos.\nColo uterino impérvio, com orifício interno livre.\nMorfologia Fetal:\nCrânio íntegro, com caracterização de suas principais estruturas.\nFace fetal sem alterações aparentes. Perfil de aspecto habitual.\nColuna fetal com imagem preservada.\nPulmões de ecogenicidade compatível com a fase de gestação.\nFrequência cardíaca em torno de ______  batimentos por minuto (bpm).\nAparentemente preservadas as quatros câmaras cardíacas.\nEstômago bem caracterizado. Rins e bexiga de estrutura mantida.\nMembros fetais de aspecto normal.\nParâmetros biométricos:\nDiâmetro biparietal (DBP): ______  mm.\nDiâmetro occiptofrontal (DOF): ______  mm.\nCircunferência cefálica (CC): ______  mm.\nCircunferência abdominal (CA): ______  mm.\nComprimento umeral (CUM): ______  mm.\nComprimento femural (CF): ______  mm.\nPeso fetal em torno de ______  gramas (+/- 15%).\nÍndices biométricos:\nRelação DBP/DOF (x100): ______  % (normal)\nRelação CC/CA (x100): ______  % (normal)\nRelação CF/CA (x100): ______  % (normal)\nPlacenta:\nLocalização ______ , com aspecto compatível com grau ______  de Grannum (zero a três). Espessura de ______  mm.\nCordão umbilical:\nInserção fetal e placentária, preservadas. Presença de 2 artérias e uma veia.\nLíquido amniótico:\nVolume de líquido amniótico subjetivamente normal. ILA= ______  (normal).\n\n\nOPINIÃO:\nGestação única, tópica, de concepto vivo.\nBiometria média compatível com ______  semanas e ______  dias (variação de até +/- 8 %).\nCrescimento fetal adequado.\nOBS: o exame realizado corresponde à ultra-sonografia obstétrica básica (nível I), destinada à avaliação do crescimento, vitalidade fetal e estimativa da idade gestacional.\n"
            },
            {
                nome: "USG OBSTÉTRICA (2º TRIMESTRE)",
                texto:"Exame normal",
                tags:"Modo B / simplificado",
                laudo_SemContraste:"sem exame",
                laudo_ComContraste:"ULTRASSONOGRAFIA OBSTÉTRICA\n\nTÉCNICA:\nExame realizado com transdutor convexo de alta freqüência.\n\nRELATÓRIO:\nÚtero globoso e proeminente, apresentando em seu interior feto único, em situação ______ , apresentação ______ , com posição de dorso à ______ . O feto apresenta sinais vitais presentes, representados por movimentação ativa e batimentos cardíacos.\nColo uterino impérvio, com orifício interno livre.\nFrequência cardíaca em torno de ______  batimentos por minuto (bpm).\nParâmetros biométricos:\nDiâmetro biparietal (DBP): ______  mm.\nCircunferência cefálica (CC): ______  mm.\nCircunferência abdominal (CA): ______  mm.\nComprimento femural (CF): ______  mm.\nPeso fetal em torno de ______  gramas (+/- 15%).\nPlacenta:\nLocalização ______ , com aspecto compatível com grau ______  de Grannum (zero a três).\nCordão umbilical:\nInserção fetal e placentária, preservadas. Presença de 2 artérias e uma veia.\nLíquido amniótico:\nVolume de líquido amniótico subjetivamente normal.\n\nOPINIÃO:\nGestação única, tópica, de concepto vivo.\nBiometria média compatível com ______  semanas e ______  dias (variação de até +/- 8 %).\nCrescimento fetal adequado.\nOBS: o exame realizado corresponde à ultra-sonografia obstétrica básica (nível I), destinada à avaliação do crescimento, vitalidade fetal e estimativa da idade gestacional.\n"
            },
        ]
    }


}




// adicionarColuna1(tomografiaLaudo);

function adicionarColuna1(exame){

    let keys = Object.keys(exame)

    $("#coluna1").empty() /// prevenir duplicacao

    keys.forEach(function(valor,indice){

        let template = "<p><button id="+ valor +" class=\"btn w-100 text-uppercase col1 \">"+ valor +"</button></p>"

        $("#coluna1").append(template)
    })

}

//////////// copiar area de transferencia
function copiarAreaTransferencia(texto){

    let copyText = texto

    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

/////////////// retirar elementos das colunas 1 e 2

function  retirarElementosColunas1e2 () {

    $("#coluna1").empty()
    $("#coluna2").empty()

}

/////////////////////

////// botoes

////////////////

////////// botoes navbar

///////// muda o modo de inserção na coluna 2



$("#lista_card").click(function(){

    if(listaColuna === true){

        listaColuna = false
        $("#lista_card").text("CARD")

    }else {

        listaColuna = true
        $("#lista_card").text("LISTA")
    }

    $("#coluna2").empty();
    $(".input-group").toggleClass("invisible")
    $("#myInput").toggleClass("invisible")

})

///tomografia
$("#btnTomografia").click(function(){

    retirarElementosColunas1e2()

    exame = "tomografia";

    adicionarColuna1(exames.tomografia);

})

///ressonancia
$("#btnRessonancia").click(function(){

    retirarElementosColunas1e2()

    exame = "ressonancia";

    adicionarColuna1(exames.ressonancia);

})

/// ultrassonografia
$("#btnUltrassonografia").click(function(){

    retirarElementosColunas1e2()

    exame = "ultrassonografia";

    adicionarColuna1(exames.ultrassonografia);

})

////////////////// botoes coluna 1

//// adiciona itens na coluna 2
$( document ).ready(function() {
    
    $( "#coluna1" ).delegate( "button", "click", function() {
        
        let identificador = $(this).attr("id");

        $("#coluna2").empty();
        $("#myinput").val("");

        if(listaColuna === true){

            let valor = "<table class=\"table\">  <tbody id=\"tbBody\">   </tbody> </table> "
            
            $("#coluna2").append(valor)

        }

        exames[exame][identificador].forEach(function(valor,indice){

            

            let adicionado;

            if( listaColuna === false){

            //// a classe exame é importante pois permite a permuta do texto do botao

            adicionado = "<div class=\"card pb-3 text-center\" > <div class=\"card-body\"> <h5 class=\"card-title text-uppercase\">"+valor.nome+"</h5> <hr> <p class=\"card-text\">"+valor.texto+"</p>  </div> <h5><hr> <span class=\"badge badge-secondary text-capitalize\">"+valor.tags+"</span></h5> <hr>  <a class=\"btn btn-primary \" title=\""+valor.laudo_SemContraste+"\">Sem Contraste </a> <a class=\"btn btn-primary "+ exame +"\" title=\""+valor.laudo_ComContraste+"\">Com Contraste </a></div>"

            }else{
            
            let item = "<tr class=\"p-3\">  <td><h6 class=\"text-uppercase\"><b>"+valor.nome+"</b></h6></td>   <td><span class=\"badge badge-secondary text-capitalize p-2\">"+valor.tags+"</span></td>     <td> <div class=\"inline-block \"> <button class=\"btn btn-primary mb-2 w-100" + exame + "\" title=\""+valor.laudo_ComContraste+"\">Com Contraste </button>  <button class=\"btn btn-primary mb-2 w-75 " + exame + "\" title=\""+valor.laudo_SemContraste+"\">Sem Contraste </button> </div>  </td> </tr>"
            
            $("#tbBody").append(item)
            
            }
                               
            $("#coluna2").append(adicionado)

            
            ///////////// mudar nome ultrassom
            if(exame == "ultrassonografia"){

                $(".ultrassonografia").text("Laudo")
            }

            ///////// popover precisa inicializar
            $(function () {
                $('[data-toggle="popover"]').popover()
            })

        })
    
    });

});





/////////////// copiar para o clip board
$( document ).ready(function() {
    
    $( "#coluna2" ).delegate( "button", "click", function() {

        let texto = $(this).attr("title");

        // alert(texto)
       
        $("#areaTransferencia").val(texto)

        let copyText = document.getElementById("areaTransferencia")
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        // alert("Copied the text: " + copyText.value);
    
    })

})