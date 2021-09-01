!include "LogicLib.nsh"
!include "WinMessages.nsh"
!include "WinVer.nsh"
!include "MUI.nsh"
!define PRODUCT_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\${PRODUCT_NAME}"
!define PRODUCT_UNINST_ROOT_KEY "HKLM"
!macro customHeader
  ; ...
!macroend

!macro preInit
    ;MessageBox MB_ICONINFORMATION|MB_OK "preInit"
    SetRegView 64
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\${PRODUCT_NAME}"
    WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\${PRODUCT_NAME}"
    SetRegView 32
    WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\${PRODUCT_NAME}"
    WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\${PRODUCT_NAME}"
!macroend

!macro customInit
  ReadRegStr $R8 ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_DIR_REGKEY}" "INSTDIR" 
${If} $R8 != ""
  ; Make sure directory is valid
  Push $R0
  Push $R1
  StrCpy $R0 "$R8" "" -1
  ${If} $R0 == "\" 
  ${OrIf} $R0 == "/" 
    StrCpy $R0 $R8*.* 
  ${Else}
    StrCpy $R0 $R8*.*
  ${EndIf}
  ${IfNot} ${FileExists} $R0
    StrCpy $R8 ""
  ${EndIf}
  Pop $R1
  Pop $R0
${EndIf}
;Detect version 
ReadRegStr $R6 ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_DIR_REGKEY}" "VERSION" 
${If} $R6 == "" 
StrCpy $R7 3 
  return 
${EndIf} 
Push "${VERSION}" 
Push "$R6" 
Exch $1
Exch
Exch $0
Exch
Push $2
Push $3
Push $4
Push $5
Push $6
Push $7

begin:
StrCpy $2 -1
IntOp $2 $2 + 1
StrCpy $3 $0 1 $2
StrCmp $3 '' +2
StrCmp $3 '.' 0 -3
StrCpy $4 $0 $2
IntOp $2 $2 + 1
StrCpy $0 $0 '' $2

StrCpy $2 -1
IntOp $2 $2 + 1
StrCpy $3 $1 1 $2
StrCmp $3 '' +2
StrCmp $3 '.' 0 -3
StrCpy $5 $1 $2
IntOp $2 $2 + 1
StrCpy $1 $1 '' $2

StrCmp $4$5 '' equal

StrCpy $6 -1
IntOp $6 $6 + 1
StrCpy $3 $4 1 $6
StrCmp $3 '0' -2
StrCmp $3 '' 0 +2
StrCpy $4 0

StrCpy $7 -1
IntOp $7 $7 + 1
StrCpy $3 $5 1 $7
StrCmp $3 '0' -2
StrCmp $3 '' 0 +2
StrCpy $5 0

StrCmp $4 0 0 +2
StrCmp $5 0 begin newer2
StrCmp $5 0 newer1
IntCmp $6 $7 0 newer1 newer2

StrCpy $4 '1$4'
StrCpy $5 '1$5'
IntCmp $4 $5 begin newer2 newer1

equal:
StrCpy $0 0
goto end
newer1:
StrCpy $0 1
goto end
newer2:
StrCpy $0 2

end:
Pop $7
Pop $6
Pop $5
Pop $4
Pop $3
Pop $2
Pop $1
StrCpy $R7 $0
Exch $0
${If} $R7 == 3 
  ;MessageBox MB_ICONINFORMATION|MB_OK "${PRODUCT_NAME} ${VERSION} installing.."
  Goto contInst
${EndIf}	
${If} $R7 == 0
  MessageBox MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON2 "${PRODUCT_NAME} $R6 已经是最新版本的软件, 确定要修复该版本吗?" IDYES +2
  Quit
  Goto contUpdate
${EndIf}
${If} $R7 == 1
  MessageBox MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON1 "您已安装了${PRODUCT_NAME} $R6，确定要更新版本至${VERSION}吗?" IDYES +2
  Quit
  Goto contUpdate
${EndIf}
${If} $R7 == 2
  MessageBox MB_ICONINFORMATION|MB_OK "您已经安装了最新的版本的${PRODUCT_NAME} $R6了。"
  Quit
${Else} 
  Goto contInst
${EndIf}
Goto contInst
contUpdate:
  Goto contInst
contInst:
  ;

!macroend

!macro customInstall
  Delete "$DESKTOP\PiStudio.lnk"
  RMDir /r "$SMPROGRAMS\${PRODUCT_NAME}"
  WriteRegStr HKLM "${PRODUCT_DIR_REGKEY}" "INSTDIR" '$INSTDIR'
  WriteRegStr HKLM "${PRODUCT_DIR_REGKEY}" "VERSION" '${VERSION}'
!macroend

!macro customInstallMode
  # set $isForceMachineInstall or $isForceCurrentInstall 
  # to enforce one or the other modes.
!macroend

!macro customUnInstall
  DeleteRegKey HKLM "${PRODUCT_DIR_REGKEY}"
!macroend


