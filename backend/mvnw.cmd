@REM Simple Windows launcher for Maven Wrapper if present else mvn
@echo off
if exist ".mvn\wrapper\maven-wrapper.jar" (
  .mvn\wrapper\maven-wrapper.cmd %*
) else (
  mvn %*
)
